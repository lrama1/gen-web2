import {persons, person} from "./person";

describe('reducers/person', ()=> {

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    afterEach(() => {
        jest.clearAllMocks();
    });

    /* We are testing that when we give our reducer an action, it creates
    * an expected new state*/
    it('returns a state with persons', () => {
        const dummyAction = {
            type: 'PERSONS_FETCH_SUCCESS',
            persons: [

            ],
            totalRecords: 2
        }

        const expectedResults = {
            records: [],
            totalRecords: 2
        }

        const result = persons(null, dummyAction);
        expect(result).toEqual(expectedResults)
    })

    it('returns a state with person', () => {
        const dummyAction = {
            type: 'PERSON_FETCH_SUCCESS',
            person: {
                                                personId: 'SamplepersonId'
                                                                ,firstName: 'SamplefirstName'    
                                                                ,lastName: 'SamplelastName'    
                                            }
        }

        const expectedResults = {
                                                personId: 'SamplepersonId'
                                                                ,firstName: 'SamplefirstName'    
                                                                ,lastName: 'SamplelastName'    
                                        }

        const result = person(null, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns a state a field edited', () => {
        const dummyAction = {
            type: 'PERSON_EDIT',
            "personId": 'ZZZ'
        }

        const expectedResults = {
            "personId": "ZZZ",
            attr2: 'YYY'
        }

        const result = person({attr2: 'YYY'}, dummyAction);
        expect(result).toEqual(result)
    })

    it('returns saved person', () => {
        const dummyAction = {
            type: 'PERSON_SAVE_SUCCESS',
            "person": {
                                                personId: 'SamplepersonId'
                                                                ,firstName: 'SamplefirstName'    
                                                                ,lastName: 'SamplelastName'    
                                            }
        }

        const expectedResult = {
                                                personId: 'SamplepersonId'
                                                                ,firstName: 'SamplefirstName'    
                                                                ,lastName: 'SamplelastName'    
                                        }

        const result = person(null, dummyAction);

        expect(result).toEqual(expectedResult)
    })

    it('pops up alert on error', () => {
        const dummyAction = {
            type: 'PERSON_SAVE_ERROR',
            error: 'Error saving'
        }

        const result = person(null, dummyAction);
        expect(window.alert).toBeCalledWith('Error saving')
    })
})