import { useBoolean } from 'usehooks-ts';
import ReactDOM from 'react-dom';
import { css } from '@emotion/react';
import { Button, CloseButton } from 'react-bootstrap';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    MessageInput,
    ConversationHeader,
    Message
} from '@chatscope/chat-ui-kit-react';
import useTicketStore from '@/stores/message-store';
import { useGetMessages, useGetTicket } from '@/services/api';
import { SignalRService } from '@/services/signalR';
import { useUserProfile } from '@/stores/user-store';
export default function Chat() {
    return ReactDOM.createPortal(<Root />, document.getElementById('root')!);
}

function Root() {
    const { toggle, value } = useBoolean(false);
    const { currentTicket, setCurrentTicket } = useTicketStore();
    const currentUser = useUserProfile();
    const { data: ticket } = useGetTicket(currentTicket?.ticketId!, {
        query: {
            enabled: !!currentTicket?.ticketId,
            select: (data) => data.data,
        },
    });
    const { data: messages } = useGetMessages(
        currentTicket?.ticketId!,
        {
            PageSize: 10,
            Page: 1,
        },
        {
            query: {
                enabled: !!currentTicket?.ticketId,
                select: (data) => data.data.data,
            },
        }
    );

    const handleOpenTicket = async (initMessage?: string) => {
        SignalRService.connection
            ?.invoke('OpenTicket', currentUser?.patient?.patientId, initMessage)
            .catch((err) => {
                console.log(err);
            })
            .then((data) => {
                setCurrentTicket(data);
            });
    };
    const handleSendMessage = async (message: string) => {
        if (!currentTicket?.ticketId) return await handleOpenTicket(message);
    };
    console.log(messages?.[0].userId, currentUser?.id);
    return (
        <div
            css={css`
                position: fixed;
                bottom: 0;
                z-index: 1000;
                right: 0;
            `}
        >
            {!value && <Button onClick={toggle}>Hỗ trợ</Button>}
            {value && (
                <MainContainer style={{ width: '400px', height: '600px' }}>
                    <ChatContainer>
                        <ConversationHeader
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <ConversationHeader.Content
                                info={ticket?.doctor?.name || 'Yêu cầu hỗ trợ'}
                                userName={ticket?.doctor?.name || 'Hỗ trợ'}
                            />
                            <ConversationHeader.Actions>
                                <CloseButton onClick={toggle} />
                            </ConversationHeader.Actions>
                        </ConversationHeader>
                        <MessageList>
                            {messages?.map((message) => (
                                <Message
                                    key={message.messageId}
                                    model={{
                                        sender: message.userId == currentUser?.id ? 'Bạn' : 'Hỗ trợ viên',
                                        direction: message.userId == currentUser?.id ? 'outgoing' : 'incoming',
                                        position: 'single',
                                        type: 'text',
                                        message: message.content!,
                                    }}
                                />
                            ))}
                        </MessageList>
                        <MessageInput onSend={handleSendMessage} attachButton={false} placeholder="Nhập tin nhắn" />
                    </ChatContainer>
                </MainContainer>
            )}
        </div>
    );
}
