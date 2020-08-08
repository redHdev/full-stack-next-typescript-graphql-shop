import React from 'react'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { CURRENT_USER_QUERY } from './User'

const REMOVE_FROM_CART_MUTSATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    corsor: pointer;
  }
`

class RemoveFromCart extends React.Component {
  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTSATION}
        variables={{ id: this.props.id }}
      >
        {(removeFromCart, { loading, error }) => (
          <BigButton
            disabled={loading}
            onClick={() => {
              removeFromCart().catch(err => alert(err.message))
            }}
            title="Delete Item"
          >
            &times;
          </BigButton>
        )}
      </Mutation>
    )
  }
}

export default RemoveFromCart
