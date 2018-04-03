module.exports = {

    //===========user_controller==============
    
    login: ( req, res, next ) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        console.log(req.body);
    
        db.users.find_user([ username, password ]).then( data => {
          if ( data.length !== 0 ) {
            const user = data[0];
    
            req.session.user = {
              id: user.userid,
              username: user.username
            }
    
            res.status(200).send( req.session.user );
          } else {
            res.status(500).send('Invailed username/password.');
          }
        }).catch( err => res.status(500).send( err ) );
      },
    
      register: ( req, res, next ) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        console.log(req.body);
    
        db.users.register_user([ username, password ]).then( data => {
          const user = data[0];
    
          req.session.user = {
            id: user.userid,
            username: user.username
          }
    
          res.status(200).send( req.session.user );
        }).catch( err => res.status(500).send( err ) );
      },
    
      logout: ( req, res, next ) => {
        req.session.destroy();
        res.status(200).send('Session destroyed.');
      },


     //===========property_controller==============

     create: ( req, res, next ) => {
        const db = req.app.get('db');
        const b = req.body
        const { id } = req.session.user;
        db.properties.create_property(id, b.name, b.description, b.address, b.city, b.state, b.zip, b.image, b.loan_amount, b.monthly_mortgage, b.desired_rent, b.recommended_rent).then(properties => {
          db.properties.get_all_properties(id).then(properties => {
              res.status(200).send( properties );
          }).catch( err => console.log( err ) );
        }).catch( err => console.log( err ) );
      },
    
      readAll: ( req, res, next ) => {
        const db = req.app.get('db');
        const { id } = req.session.user;
    
        db.properties.get_all_properties(id).then(properties => {
          console.log('here are your properties')
            res.status(200).send( properties );
        }).catch( err => console.log( err ) );
      },
    
      delete: ( req, res, next ) => {
        const db = req.app.get('db');
        const deleteId = req.params.id;
        const userId = req.session.user.id;
    
        db.properties.delete_property( deleteId ).then( () => {
          db.properties.get_all_properties( userId ).then(properties => {
              res.status(200).send( properties );
          }).catch( err => console.log( err ) );
        }).catch( err => console.log( err ) );
      },
    
      filter: ( req, res, next ) => {
        const db = req.app.get('db');
        const { amount } = req.query;
        db.properties.filter_properties([ amount, req.session.user.id ]).then( properties => {
          res.status(200).send(properties);
        });
      }

}