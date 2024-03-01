export type Event = {
    id: number,
    date: string,
    invoiceId: string,
    hourlyRate: number,
    qtTechnicians: number,
    timeRequired: number,
    materials: number,
    salesTax: number,
    profitInPercent: number,
    overhead: number,
    sellingPrice: number,
    laborCost: number
}
export type EventDate = {
    date: Date;
    event: Event;
    active: boolean;
}

export type TextAreaProps = {
    text: string;
    ariaLabel?: string;
    className?: string;
    style?: {
        width: string;
        height: string;
    };
}
