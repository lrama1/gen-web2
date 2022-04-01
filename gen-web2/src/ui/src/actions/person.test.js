
import {getRequest, putRequest} from "../utils/authority";
import {
    PERSON_FETCH_SUCCESS,
    PERSON_SAVE_SUCCESS,
    PERSONS_FETCH_SUCCESS,
    PERSON_SAVE_ERROR,
    PERSONS_FETCH_ERROR,
    PERSON_FETCH_ERROR,
    fetchAllPersons,
    fetchPerson,
    savePerson
} from "./person";

jest.mock('../utils/authority')

describe('person (action)', () => {
    
    const mockDispatch = jest.fn();
    const mockGetState= () => {
        return {
            persons: {
            	records: [],
                sortSettings: {}
            }
        }
    }

    jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('invokes success when list of persons are returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllPersons('/mockurl', 1);

        /**/
        const response = Promise.resolve({rows:[], totalRecords: 0})
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: PERSONS_FETCH_SUCCESS, persons: [], totalRecords: 0})
    })

    it('invokes error when an error occured in the service', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchAllPersons('/mockurl', 1);

        /**/
        const response = Promise.reject('Error Occured')
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: PERSONS_FETCH_ERROR, error: 'Error Occured'})
    })
    
    it('invokes success when a single person is returned', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchPerson('/mockurl');

        /**/
        const mockObjectToReturn = {
                                                personId: 'SamplepersonId'
                                                                ,firstName: 'SamplefirstName'    
                                                                ,lastName: 'SamplelastName'    
                                            }
        
        const response = Promise.resolve(mockObjectToReturn)
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: PERSON_FETCH_SUCCESS, person: mockObjectToReturn})
    })
    
    it('invokes error when a single person fetch returned error', async () => {
        /* obtain reference to thunk*/
        const thunk = fetchPerson('/mockurl');
        
        const response = Promise.reject()
        getRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: PERSON_FETCH_ERROR, error: true})
    })

    it('invokes success when a record is saved', async () => {
        /* obtain reference to thunk*/
        const thunk = savePerson('/mockurl', {});

        /**/
        const mockObjectToReturn = {
                                                personId: 'SamplepersonId'
                                                                ,firstName: 'SamplefirstName'    
                                                                ,lastName: 'SamplelastName'    
                                            }
        const response = Promise.resolve(mockObjectToReturn)
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(mockDispatch).toBeCalledWith({type: PERSON_SAVE_SUCCESS, person: mockObjectToReturn})
    })
    
    it('invokes error when save errors out', async () => {
        /* obtain reference to thunk*/
        const thunk = savePerson('/mockurl', {});

        const response = Promise.reject('Error saving')
        putRequest.mockImplementation(() => response);

        const result = await thunk(mockDispatch, mockGetState);
        expect(window.alert).toBeCalledWith("\"Error saving\"")
    })

})