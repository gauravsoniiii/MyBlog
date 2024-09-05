// API_NOTIFICATION_MESSAGES


export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded, please wait'
    },
    success: {
        title: 'Success',
        message: 'Data successfully loaded.'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occurred while loading data.'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occurred while parsing the data.'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server. Please check your internet connection and try again.'
    }
}




// API_SERVICE_CALL

export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST' }
}