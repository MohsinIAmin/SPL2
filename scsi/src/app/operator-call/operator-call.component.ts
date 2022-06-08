import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as apiRTC from '@apirtc/apirtc';

@Component({
  selector: 'app-operator-call',
  templateUrl: './operator-call.component.html',
  styleUrls: ['./operator-call.component.css']
})
export class OperatorCallComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    var localStream:any = null;

    var ua = new apiRTC.UserAgent({
      uri: 'apzkey:97caf662ca01060b33d1523f87c9d215'
    });

    ua.register().then((session:any) => {
      const conversation = session.getConversation('Fahad');
      conversation.on('streamListChanged', (streamInfo: any) => {
        console.log("streamListChanged :", streamInfo);
        if (streamInfo.listEventType === 'added') {
          if (streamInfo.isRemote === true) {
            conversation.subscribeToMedia(streamInfo.streamId)
              .then((stream:any) => {
                console.log('subscribeToMedia success');
              }).catch((err:any) => {
                console.error('subscribeToMedia error', err);
              });
          }
        }
      });

      conversation.on('streamAdded', (stream: any) => {
        stream.addInDiv('remote-container', 'remote-media-' + stream.streamId, {}, false);
      }).on('streamRemoved', (stream: any) => {
        stream.removeFromDiv('remote-container', 'remote-media-' + stream.streamId);
      });

      ua.createStream({
        constraints: {
          audio: true,
          video: true
        }
      }).then((stream: any) => {

        console.log('createStream :', stream);

        // Save local stream
        localStream = stream;
        stream.removeFromDiv('local-container', 'local-media');
        stream.addInDiv('local-container', 'local-media', {}, true);

        //==============================
        // 6/ JOIN CONVERSATION
        //==============================
        conversation.join()
          .then((response: any) => {
            //==============================
            // 7/ PUBLISH LOCAL STREAM
            //==============================
            conversation.publish(localStream);
          }).catch((err:any) => {
            console.error('Conversation join error', err);
          });

      }).catch((err:any) => {
        console.error('create stream error', err);
      });
    
    });
  }

  endCall(){
    this.router.navigate(['operatorchat']);
  }

}
