import * as signalR from '@microsoft/signalr';
export class SignalRService {
    public static connection: signalR.HubConnection | null = null;
    public static async  initSignalR(token: string) {
        if (SignalRService.connection?.state === signalR.HubConnectionState.Connecting) {
            return;
        }
        console.log('initSignalR');

        if (SignalRService.connection) {
            SignalRService.connection.stop();
        }
        SignalRService.connection = new signalR.HubConnectionBuilder()
            .withUrl('/api/realtime',{
                transport: signalR.HttpTransportType.LongPolling,
                accessTokenFactory() {
                    return token;
                },
            })
            .withAutomaticReconnect()
            .build();
        await SignalRService.connection.start()
        setInterval(() => {
            console.log(this.connection?.state)
        }, 10000);
    }
}



