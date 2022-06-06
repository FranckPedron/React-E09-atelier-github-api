import React from 'react'
import { Message as MessageSemanticUI } from 'semantic-ui-react'

function Message() {
    return (
    <MessageSemanticUI
        header='Changes in Service'
        content='We updated our privacy policy here to better service our customers. We recommend reviewing the changes.'
    />
)
    }


export default Message;
