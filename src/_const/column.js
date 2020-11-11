import { Button } from 'reactstrap';

let column = [
    {
        columnHeader_id: 0,
        title: 'نام',
        width: '64px',
        height: '100px',
        fun: ((item) => {return <div> <img src={item.img} alt="strawberry" width="30px" height="30px"/>  <span> {item.title} </span></div>})
    },
    // {
    //     columnHeader_id: 1,
    //     title: 'نام',
    //     width: '64px',
    //     height: '100px',
    //     fun: (item) => {return <div>{item.name}</div>}
    // },
    {
        columnHeader_id: 2,
        title: 'قیمت',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div>{item.price}</div>}
    },
    {
        columnHeader_id: 3,
        title: 'موجودی',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div>{item.stock}</div>}
    },
    {
        columnHeader_id: 4,
        title: 'دسته بندی',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div>{item.variant_id}</div>}
    },
    {
        columnHeader_id: 5,
        title: 'اطلاعات جنس',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div><Button color="info" >مشاهده</Button></div>},
        type: 'info'
    },
    {
        columnHeader_id: 6,
        title: 'توضیحات',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div>{item.id}</div>}
    },
]
export default column;