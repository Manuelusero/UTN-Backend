
import transporter from "../config/transporter.config.js"


/*
 * Envia un email de prueba a una direccion especifica.
 * @param {string} text - Texto que se va a incluir en el email.
 * @param {string} to - Direccion a la que se va a enviar el email.
 */
const sendEmail = async (options) => {
    try{
        let response = await transporter.sendMail(options)
    }

        /*{
  accepted: [ 'jorgereynaldo93@gmail.com' ],
  rejected: [],
  ehlo: [
    'SIZE 35882577',
    '8BITMIME',
    'AUTH LOGIN PLAIN XOAUTH2 PLAIN-CLIENTTOKEN OAUTHBEARER XOAUTH',
    'ENHANCEDSTATUSCODES',
    'PIPELINING',
    'CHUNKING',
    'SMTPUTF8'
  ],
  envelopeTime: 549,
  messageTime: 596,
  messageSize: 265,
  response: '250 2.0.0 OK  1729000318 98e67ed59e1d1-2e392f63186sm1746768a91.45 - gsmtp',
  envelope: { from: '', to: [ 'jorgereynaldo93@gmail.com' ] },
  messageId: '<c539c156-d177-eaca-14e5-09706b5babf3@localhost>'
}
 */
    //Para poder trackear el error mejor y arreglarlo
    catch (error){
        console.error('Error al enviar mail:', error)
        //Para que la funcion que invoqeu a esta funcion tambien le salte el error
        throw error
    }
}
      



    export {sendEmail}

