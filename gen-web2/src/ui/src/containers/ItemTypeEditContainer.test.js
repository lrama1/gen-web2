jest.mock('../actions/itemType')
import {mapStateToProps, mapDispatchToProps} from "./ItemTypeEditContainer";
import {saveItemType, editItemType, ITEMTYPE_EDIT, ITEMTYPE_SAVE_SUCCESS} from "../actions/itemType";


describe('ItemTypeEditContainer', () => {

    const mockDispatch = jest.fn();
    const mockGetState = jest.fn();

    afterEach(() => {
        mockDispatch.mockClear();
    });

    it('returns the expected state', ()=> {
        const sampleState = {
            itemType: {
                field1: 'samplevalue1',
                field2: 'samplevalue2'

            }
        }
        const result = mapStateToProps(sampleState);
        expect(result).toEqual(
            {
                selectedItemType: {
                    field1: 'samplevalue1',
                    field2: 'samplevalue2'
                }
            }
        )
    })

    it('invokes edit itemType action', ()=> {
        editItemType.mockImplementation(()=> {
            return{
                type: ITEMTYPE_EDIT,
                name: 'field1',
                value: 'dummyval'
            }
        })
        mapDispatchToProps(mockDispatch).onEditItemType({target: {name: 'field1', value: 'dummyval'}})
        expect(mockDispatch).toBeCalledWith({
            type: ITEMTYPE_EDIT,
            name: 'field1',
            value: 'dummyval'
        })
        expect(mockDispatch).toBeCalledTimes(1)
    })

    it('invokes save itemType action', ()=> {
        saveItemType.mockImplementation(()=>{
            return {
                type: ITEMTYPE_SAVE_SUCCESS
            }
        })

        mapDispatchToProps(mockDispatch).onSaveItemType('/save', {})
        expect(mockDispatch).toBeCalledWith({type: ITEMTYPE_SAVE_SUCCESS})
    })

});