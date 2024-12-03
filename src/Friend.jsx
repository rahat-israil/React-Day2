import PropTypes from 'prop-types';

const Friend = ({ friend }) => {
  const { name, email, phone, website, company:{bs} } = friend;
  return (
    <div style={{ border: '1px solid green', marginTop: '30px' }}>
      <h3>Name: {name}</h3>
          <h4>Email: {email}</h4>
          <h4>Phone: {phone}</h4>
          <h4>Website: {website}</h4>
          <h4>Company BS: {bs}</h4>
          <h4>Company Name: {friend.company.name}</h4>
    </div>
  );
};

Friend.propTypes = {
  friend: PropTypes.object,
};

export default Friend;
