interface IPatient {
    id: number,
    name: string,
    phone: string
}


const ListPatient = (props: IPatient) => {    
    return(
        <tr>
            <th>{props.id}</th>
            <th>{props.name}</th>
            <th>{props.phone}</th>
        </tr>
    )
}
export default ListPatient;