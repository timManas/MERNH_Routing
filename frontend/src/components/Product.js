import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Card } from 'react-bootstrap'

const Product = ({ product, test }) => {
  console.log(`property product: ${test}`)
  console.log(`property test: ${test}`)

  return (
    <Card className='my-3 p-3 rounded text-white bg-primary'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='text-danger'>
            <strong>Link with CardTitle as div</strong>
          </Card.Title>
        </Link>

        <LinkContainer to={`/product/${product._id}`}>
          <Card.Title className='text-info'>
            <strong>LinkContainer with CardTitle as default</strong>
          </Card.Title>
        </LinkContainer>

        <LinkContainer to={`/product/${product._id}`}>
          <Card.Title as='div' className='text-info'>
            <strong>LinkContainer with CardTitle as div</strong>
          </Card.Title>
        </LinkContainer>

        <Link to={`/product/${product._id}`}>
          <strong>Link Default</strong>
        </Link>

        <LinkContainer to={`/login`}>
          <Card.Title className='text-info' as='a'>
            <strong>LinkContainer as a </strong>
          </Card.Title>
        </LinkContainer>

        <LinkContainer to={`/login`} as='p'>
          <Card.Title className='text-info'>
            <strong>LinkContainer as p</strong>
          </Card.Title>
        </LinkContainer>

        <LinkContainer to={`/login`}>
          <strong>LinkContainer by strong</strong>
        </LinkContainer>

        <LinkContainer to={`/login`}>
          <b>LinkContainer by b</b>
        </LinkContainer>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
