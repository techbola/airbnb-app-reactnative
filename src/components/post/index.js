import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = (props) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
      />

      {/* Bed and Bedroom */}
      <Text style={styles.bedrooms}>
        1 bed 1 bedroom
      </Text>

      {/* Type and Description */}
      <Text style={styles.description}>
        <Text style={styles.apartmentType}>Deluxe Suite. </Text>
        <Text numberOfLines={2}>
          This is a very good and perfect space to chill out.
          Deluxe Suite. This is a very good and perfect space to chill out.
          Deluxe Suite. This is a very good and perfect space to chill out.
        </Text>
      </Text>

      {/* Old price and new price */}
      <Text style={styles.prices}>
        <Text style={styles.price}>$43 </Text>
        <Text style={styles.newPrice}> $36</Text>
        / night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>
       $230 total
      </Text>

    </View>
  );
};

export default Post;
