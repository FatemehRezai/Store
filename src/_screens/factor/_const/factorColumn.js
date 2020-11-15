import { Button } from 'reactstrap';
import { Counter } from "../../../_components";


let factorColumn =(props)=> [
    {
        columnHeader_id: 0,
        title: 'حذف',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div><i className="fas fa-trash-alt"></i></div>}
    },////////////////////////removeFactorArrayItem need to check id vs productId
    {
        columnHeader_id: 1,
        title: 'نام',
        width: '64px',
        height: '100px',
        fun: ((item) => {return <div> <img src={item.img} alt="strawberry" width="30px" height="30px"/>  <span> {item.title} </span></div>})
    },
    {
        columnHeader_id: 2,
        title: 'قیمت پایه',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div>{item.price}</div>}
    },
    {
        columnHeader_id: 3,
        title: 'تعداد',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div><Counter productId={item.productId} action={""} productCategory={item.productCategory} quantity={item.quantity} onChangeHandler= {props.onChangeHandler} /></div>}/////////////باید کانتر اضافه بشه
    },
    {
        columnHeader_id: 4,
        title: 'قیمت کل',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div>{item.quantity * item.price}</div>}
    },
    // {
    //     columnHeader_id: 5,
    //     title: 'اطلاعات جنس',
    //     width: '64px',
    //     height: '100px',
    //     fun: (item) => {return <div>{item.description}</div>},
    //     type: 'info'
    // },
    // {
    //     columnHeader_id: 6,
    //     title: 'توضیحات',
    //     width: '64px',
    //     height: '100px',
    //     fun: (item) => {return <div>{item.id}</div>}
    // },
]
export default factorColumn;