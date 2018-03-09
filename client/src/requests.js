import $ from 'jquery';

const getInformation = (id, callback) => {
  $.ajax({
    url: `/information/${id}`,
    type: 'GET',
  }).done((data) => {
    callback(data);
  });
};

export default getInformation;
