# MERNH_Routing

Added Functinality of different Routing options

# KeyNotes
- LINK CONTAINERS TAKE ON THE THEIR CHILD ELEMENT AND ADD A LINK TO IT ...
- They make their "Containers" as "Links" .... capiche ? 
Example: This will display a div  
        <LinkContainer to={`/product/${product._id}`}>
          <Card.Title as='div' className='text-info'>
            <strong>LinkContainer with CardTitle as div</strong>
          </Card.Title>
        </LinkContainer>

Example: This will display a tag
        <LinkContainer to={`/login`}>
          <Card.Title className='text-info' as='a'>
            <strong>LinkContainer as a </strong>
          </Card.Title>
        </LinkContainer>

Example: This will display as strong tag with a link
        <LinkContainer to={`/login`}>
          <strong>LinkContainer by strong</strong>
        </LinkContainer>

Example: This will display as a bold tag with a link
        <LinkContainer to={`/login`}>
          <b>LinkContainer by b</b>
        </LinkContainer>
