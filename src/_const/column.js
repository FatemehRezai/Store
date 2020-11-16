import { Button } from 'reactstrap';

let column = [
    {
        columnHeader_id: 0,
        columnHeader_name: 'title',
        title: 'نام',
        width: '64px',
        height: '100px',
        fun: ((item) => {return <div> <img src={item.img} alt="strawberry" width="30px" height="30px"/>  <span> {item.title} </span></div>}),
        sortable: true
    },
    // {
    //     columnHeader_id: 1,
        // columnHeader_name: 'title',
    //     title: 'نام',
    //     width: '64px',
    //     height: '100px',
    //     fun: (item) => {return <div>{item.name}</div>},
        // sortable: true
    // },
    {
        columnHeader_id: 2,
        columnHeader_name: 'price',
        title: 'قیمت',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div>{item.price}</div>},
        sortable: true,
    },
    {
        columnHeader_id: 3,
        columnHeader_name: 'stock',
        title: 'موجودی',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div>{item.stock}</div>},
        sortable: true,
    },
    {
        columnHeader_id: 4,
        columnHeader_name: 'variant_id',
        title: 'دسته بندی',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div>{item.variant_id}</div>},
        sortable: false,
    },
    {
        columnHeader_id: 5,
        title: 'اطلاعات جنس',
        columnHeader_name: 'info',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div><Button color="info" >مشاهده</Button></div>},
        sortable: false,
        type: 'info',
    },
    {
        columnHeader_id: 6,
        columnHeader_name: 'id',////
        title: 'توضیحات',
        width: '64px',
        height: '100px',
        fun: (item) => {return <div>{item.id}</div>},////
        sortable: false,
    },
]
export default column;