import { Button } from 'reactstrap';
import { Counter } from "../../../_components";


let factorColumn =(props)=> [
    {
        columnHeader_id: 0,
        columnHeader_name: 'delete',
        title: 'حذف',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div className="factorColumnDelete"><i className="fas fa-trash-alt"></i></div>},
        sortable: false,
        filterable: false,
        type: 'icon',
    },////////////////////////removeFactorArrayItem need to check id vs productId
    {
        columnHeader_id: 1,
        columnHeader_name: 'title',
        title: 'نام',
        width: '64px',
        height: '100px',
        fun: ((item) => {return <div> <img src={item.img} alt="strawberry" width="30px" height="30px"/>  <span className="text-nowrap"> {item.title} </span></div>}),
        sortable: true,
        filterable: true,
        type: 'text',
    },
    {
        columnHeader_id: 2,
        columnHeader_name: 'price',
        title: 'قیمت پایه',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div>{item.price}</div>},
        sortable: true,
        filterable: true,
        type: 'number',
    },
    {
        columnHeader_id: 3,
        columnHeader_name: 'quantity',
        title: 'تعداد',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div><Counter productId={item.productId} action={""} productCategory={item.productCategory} quantity={item.quantity} onChangeHandler= {props.onChangeHandler} /></div>},/////////////باید کانتر اضافه بشه
        sortable: true,
        filterable: true,
        type: 'number',
    },
    {
        columnHeader_id: 4,
        columnHeader_name: 'totalPrice',
        title: 'قیمت کل',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div>{item.quantity * item.price}</div>},
        sortable: true,
        filterable: true,
        type: 'number',
    },
    // {
    //     columnHeader_id: 5,
    //     title: 'اطلاعات جنس',
    //     width: '64px',
    //     height: '100px',
    //     fun: (item) => {return <div>{item.description}</div>},
    //     type: 'info',
        // sortable: false,
        // filterable: true,
        // type: 'number',
    // },
    // {
    //     columnHeader_id: 6,
    //     title: 'توضیحات',
    //     width: '64px',
    //     height: '100px',
    //     fun: (item) => {return <div>{item.id}</div>},
        // sortable: false,
        // filterable: true,
        // type: 'number',
    // },
]
export default factorColumn;