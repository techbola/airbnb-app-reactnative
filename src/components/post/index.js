import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = (props) => {

  const post = props.post;

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{uri: post.image}}
      />

      {/* Bed and Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type and Description */}
      <Text style={styles.description}>
        <Text style={styles.apartmentType}>{post.type}. </Text>
        <Text numberOfLines={2}>
          {post.title}
        </Text>
      </Text>

      {/* Old price and new price */}
      <Text style={styles.prices}>
        <Text style={styles.price}>${post.oldPrice} </Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text>
        / night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>
       ${post.totalPrice} total
      </Text>

    </View>
  );
};

export default Post;
