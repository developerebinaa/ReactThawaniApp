import axios from 'axios';
import { THAWANI_API_BASE_URL, THAWANI_API_KEY, SESSION_URL, PUBLISH_KEY } from '../../config';

interface Product {
    name: string;
    quantity: number;
    unit_amount: number;
}

interface CheckoutSessionRequest {
    client_reference_id: string;
    mode: string;
    products: Product[];
    success_url: string;
    cancel_url: string;
    metadata: {
        'Customer name': string;
        'order id': number;
    };
}




// Define the base URL for the API (replace with your actual base URL)
// const API_BASE_URL = 'https://uatcheckout.thawani.om/api/v1';

// Define the Thawani API key
// const THAWANI_API_KEY = 'rRQ26GcsZzoEhbrP2HZvLYDbn9C9et'; // Replace with your actual API key

// Create function for checkout
export const createCheckoutSession = async (checkout: CheckoutSessionRequest) => {
    const options = {
        method: 'POST',
        url: `${THAWANI_API_BASE_URL}/checkout/session`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'thawani-api-key': THAWANI_API_KEY
        },
        data: checkout
    };

    try {
        const { data } = await axios.request(options);
        const redirectUrl = `${SESSION_URL}${data.data.session_id}?key=${PUBLISH_KEY}`;
        window.location.href = redirectUrl;
    } catch (error) {
        console.log(error);
    }
}
