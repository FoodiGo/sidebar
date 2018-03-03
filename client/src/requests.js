import $ from 'jquery';

const getInformation = (id, callback) => {
  $.ajax({
    url: `/:${id}/information`,
    type: 'GET',
  }).done((data) => {
    console.log(data);
    callback(data);
  });
};

export default getInformation;
