import { 
    FETCH_ORGANIZATIONS,
    FETCH_USERS 
}   from '../actions/types'

const initialState = {
    endPoints: null,
    organizations: null,
    organization: null,
    organizationId: null,
    branches: null,
    regions: null,
    countries: null,
    audiences: null,
    users:null
}

export default function reducerCase(state = initialState, action) {
    switch (action.type) {
        case FETCH_ORGANIZATIONS:
            return{
                ...state,
                organizations: action.payload
            }
        case FETCH_USERS:
            return{
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}