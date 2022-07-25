export default ApiUrls= {
    Auth: {
        SignIn: 'Auth/SignIn',
        SignUp: 'Auth/SignUp',
        VerifyUser: 'Auth/VerifyUser/',
        GetAppToken: 'Auth/GetAppToken',
        RenewToken: 'Auth/RenewToken/',
        ChangeEmail: 'Auth/ChangeEmail',
        ResendEmail: 'Auth/ResendEmail'
    },
    User: {
        ResetPassword: 'User/ResetPassword',
        UpdateBusinessProfile: 'User/Client/UpdateBusinessProfile',
        UpdateGeneralSettings: 'User/UpdateGeneralSettings',
        Translator: {
            SetupPortfolio: 'User/Talent/Translator/SetupPortfolio'
        },
        VoiceOver: {
            SetupPortfolio: 'User/Talent/VoiceOver/SetupPortfolio'
        },
    },
    Job: {
        GetJob: 'Job'
    }
}