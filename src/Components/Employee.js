import React from 'react';
import './Parts.css';

export function Employee() {
    const htmlContent = `
        <!DOCTYPE html>
        <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
                <div class="Auth-form-container">
                    <form class="Auth-form" action="/Employee">
                        <div class="Auth-form-content">
                            <h3 class="Auth-form-title" align="center">Welcome Back!</h3>                   
                            <button class="button" style="vertical-align:middle" formAction="/CreateCustomer"><span>Open an Account</span></button><br>
                            <button class="button" style="vertical-align:middle" formAction="/"><span>Log Out</span></button>                          
                        </div>
                    </form>
                </div>
            </body>
        </html>
    `;

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
