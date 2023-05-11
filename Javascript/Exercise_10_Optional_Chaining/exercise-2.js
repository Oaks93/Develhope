const order = {};

if ( order/*objet*/ &&  order.customer/*1statribute*/ && order.customer.address/*2ndatribute inside 1st*/ && !order.customer.address.city/*3rdatribute inside 2nd*/) {
  console.log('City is required1');
}

if (!order?.customer?.address?.city)/*if this is false...print*/ {
  console.log('City is required');
}

//sorry for the coments but this one was breaking my brain xD 
