import mongoose, {Document, ObjectId, Schema} from 'mongoose';

export interface IIncomingPayment extends Document {
    _id: ObjectId;
    sender: string;
    currency: string;
    amount: number;
    read: boolean;
    description: string;
    status: string;
    date: string;
}

const IncomingPaymentSchema: Schema = new Schema(
    {
        sender: {
            type: String,
            required: true,
        },
        currency: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        read: {
            type: Boolean,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },

    }
);

export default mongoose.model<IIncomingPayment>('incoming-payment', IncomingPaymentSchema);