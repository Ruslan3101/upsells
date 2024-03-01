import {Accordion, Button, Card} from "react-bootstrap";
import {Event, EventDate} from "../../types/types.tsx";


export function HistoryItem(
    {
        id,
        date,
        invoiceId,
        hourlyRate,
        qtTechnicians,
        timeRequired,
        materials,
        salesTax,
        profitInPercent,
        overhead,
        sellingPrice,
        laborCost
    }: Event
) {
    // const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');
    //
    // const handleFilter = () => {
    //     // Convert startDate and endDate to Date objects
    //     const parsedStartDate = startDate ? new Date(startDate) : null;
    //     const parsedEndDate = endDate ? new Date(endDate) : null;
    //
    //     // Perform filtering based on parsedStartDate and parsedEndDate
    //     const filteredData = date.filter(item => {
    //         const itemDate = new Date(item.date);
    //         return (!parsedStartDate || itemDate >= parsedStartDate) && (!parsedEndDate || itemDate <= parsedEndDate);
    //     });
    //
    //     // Display filtered data or do further processing
    //     console.log(filteredData);
    // };
// // const handlerFilter = () => {
//     const filterDates = date.filter((item )=> {
//         const itemDate = new Date(item.date)
//         console.log( typeof(itemDate))
//     })
// }
    return (

        <Card className="mb-2">
            <Accordion>
                <Accordion.Item eventKey={id.toString()}>
                    <Accordion.Header className="m-">
                        <span className="">{date}</span>
                        <span className="">{`$${sellingPrice}`}</span>
                        <span>{invoiceId}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Card.Header className="bg-info">{date}</Card.Header>
                        <Card.Header>{invoiceId}</Card.Header>
                        <Card.Body>
                            <Card.Title>{`$${sellingPrice}`}</Card.Title>
                            <Card.Text className="d-flex align-item-center text-muted">
                                <span className="fs-5 m-2">{`Rate/Hour: ${hourlyRate}`}</span>
                                <span className="fs-5 m-2">{`Time: ${timeRequired}`}</span>
                                <span className="fs-5 m-2">{`Materials: ${materials}`}</span>
                                <Button
                                    variant="primary"
                                    className="d-flex ms-auto  justify-content-center"
                                >Edit</Button>
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Card>

    );
}
