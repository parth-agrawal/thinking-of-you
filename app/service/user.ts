import { PrismaClient, User } from '@prisma/client'


// default takes no args, for demo
export async function sendEmailtoUser(user: User){

    const webhookURL = "https://hooks.zapier.com/hooks/catch/15341589/376vea0/"

    const data = {
        userID: user.id,
        first_name: user.first_name,        
        email_address: user.email_address
    }

    try {
        //Perform the fetch request to the webhook
        const response = await fetch(webhookURL, {
            method: "POST",

            headers:{},
            /*
            headers: {
                'Content-Type': 'application/json',
            },
            */
            body: JSON.stringify(data), //convert the Javascript object to a JSON string
        });

        if(!response.ok){
            throw new Error('HTTP Error! status: ${response.status}')
        }
        else{
            // Handle the response correctly
            console.log('Webhook was successfully called.');
            const responseData = await response.json();
            console.log(responseData);

        }
    }

    catch(error){
        console.error('Failed to call webhook:', error)
    }

}