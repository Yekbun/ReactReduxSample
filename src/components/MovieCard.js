import React from 'react'
import { Card, Icon,  Grid, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const extra = (movie, deleteMovie) => {
	return (
		<div className="ui two buttons">
		<Button animated='vertical' as={Link} to={`/movie/${movie._id}`}>
		<Button.Content hidden>Edit</Button.Content>
		<Button.Content visible>
			<Icon name='edit' />
		</Button.Content>
		</Button>
		<Button animated='vertical' onClick={() => deleteMovie(movie._id)}>
		<Button.Content hidden>Delete</Button.Content>
		<Button.Content visible>
			<Icon name='trash' />
		</Button.Content>
		</Button>
		
	</div>
	)
}
const MovieCard = ({ movie,deleteMovie }) => (

	<Grid.Column>
	<Card>
		<Card
			image={movie.cover}
			header={ movie.title}
			extra={extra(movie, deleteMovie)}
		/>
	</Card>
</Grid.Column>
);

export default MovieCard;