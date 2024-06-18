import { useLoaderData } from 'react-router-dom';
import { Product as Products } from '../../interfaces/product.interface';

export function Product() {
	const data = useLoaderData() as Products;

	return <>
		Product - {data.name}
	</>;
}