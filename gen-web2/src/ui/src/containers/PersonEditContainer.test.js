jest.mock('../actions/person')
import {mapStateToProps, mapDispatchToProps} from "./PersonEditContainer";
import {savePerson, editPerson, PERSON_EDIT, PERSON_SAVE_SUCCESS} from "../actions/person";


describe('PersonEditContainer', () => {

    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();

    afterEach(() => {
        mockDispatch.mockClear();
    });

    it('returns the expected state', ()=> {
        const sampleState = {
            person: {
                field1: 'samplevalue1',
                field2: 'samplevalue2'

            }
        }
        const result = mapStateToProps(sampleState);
        expect(result).toEqual(
            {
                selectedPerson: {
                    field1: 'samplevalue1',
                    field2: 'samplevalue2'
                }
            }
        )
    })

    it('invokes edit person action', ()=> {
        editPerson.mockImplementation(()=> {
            return{
                type: PERSON_EDIT,
                name: 'field1',
                value: 'dummyval'
            }
        })
        mapDispatchToProps(mockDispatch).onEditPerson({target: {name: 'field1', value: 'dummyval'}})
        expect(mockDispatch).toBeCalledWith({
            type: PERSON_EDIT,
            name: 'field1',
            value: 'dummyval'
        })
        expect(mockDispatch).toBeCalledTimes(1)
    })

    it('invokes save person action', ()=> {
        savePerson.mockImplementation(()=>{
            return {
                type: PERSON_SAVE_SUCCESS
            }
        })

        mapDispatchToProps(mockDispatch).onSavePerson('/save', {})
        expect(mockDispatch).toBeCalledWith({type: PERSON_SAVE_SUCCESS})
    })

});