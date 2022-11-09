import React from 'react';

// import { PublicClientApplication } from "@azure/msal-browser";
// import { MsalProvider } from "@azure/msal-react";
// import { msalConfig, loginRequest } from "../services/authConfig";
// import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
// import { SignInButton} from "./login/signInButton"
// import { SignOutButton} from "./login/signOutButton"
// import { callSFDCMsGraph } from "../../services/graph";

    
// const msalInstance = new PublicClientApplication(msalConfig);

function Login(props){

// const ProfileContent = (props)=> {node -v 

//       const { instance, accounts } = useMsal();
//       //const [graphData, setGraphData] = useState(null);

//       //const name = accounts[0] && accounts[0].name;

//       function RequestSFDCSPSync() {
//         const request = {
//           ...loginRequest,
//           account: accounts[0]
//         };
//         //props.showLoading();
//         // Silently acquires an access token which is then attached to a request for Microsoft Graph data
//         instance.acquireTokenSilent(request).then((response) => {
//           callSFDCMsGraph(response.accessToken).then(response => {
//             ///setGraphData(true)            
//             //props.hideLoading();
//             props.syncSPcallback(response);
//           });
//         }).catch((e) => {
//           instance.acquireTokenPopup(request).then((response) => {
//             callSFDCMsGraph(response.accessToken).then(response => {
//               //this.props.hideLoading();
//               props.syncSPcallback(response);
//               //setGraphData(response)
//             });
//           });
//         });
//       }
      
//       return (
//         <>
//           <button className="btn hpeSteelBtn" onClick={RequestSFDCSPSync}>Request Sharepoint SFDC syncronization</button>       
//         </>
//       );
//     };

//     const syncSFDCToBFast = (response) =>{         
//         console.log("MSGRAPH RESPONSE")
//     }


    return (
        // <MsalProvider instance={msalInstance}>            
        //         <UnauthenticatedTemplate>                
        //             <SignInButton />                
        //         </UnauthenticatedTemplate>
        //         <AuthenticatedTemplate> 
        //             <MDBRow center>
        //                 <SignOutButton/>                            
        //                 <ProfileContent syncSPcallback={syncSFDCToBFast} /*showLoading={this.props.showLoading} hideLoading={this.props.hideLoading}*//>
        //             </MDBRow>                      
        //         </AuthenticatedTemplate>            
        // </MsalProvider>
        <h1> I AM LOGIN</h1>
    );
}


export default Login;