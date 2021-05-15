/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to Redbox!');
});

/// /////////////////////////////////
/// ////TV/Movie Endpoints////////
/// /////////////////////////////////
router.get('/tv_movie', async (req, res) => {
  try {
    const movies = await db.Tv_movie.findAll();
    const reply = movies.length > 0 ? { data: movies } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/tv_movie/:catalogue_id', async (req, res) => {
  try {
    const movies = await db.Tv_movie.findAll({
      where: {
        catalogue_id: req.params.catalogue_id
      }
    });

    res.json(movies);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/tv_movie', async (req, res) => {
  const movies = await db.Tv_movie.findAll();
  const currentId = (await movies.length) + 1;
  try {
    const newMovie = await db.Tv_movie.create({
      cataglogue_id: currentId,
      title: req.body.title,
      pricing: req.body.pricing,
      year: req.body.year,
      duration: req.body.duration,
      episodes: req.body.episodes,
      seasons: req.body.seasons,
      studio_id: req.body.studio_id,
      rating_id: req.body.rating_id,
      genre_id: req.body.genre_id
    });
    res.json(newMovie);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/tv_movie/:catalogue_id', async (req, res) => {
  try {
    await db.Tv_movie.destroy({
      where: {
        catalogue_id: req.params.catalogue_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/tv_movie', async (req, res) => {
  try {
    await db.Tv_movie.update(
      {
        title: req.body.title,
        pricing: req.body.pricing,
        year: req.body.year,
        duration: req.body.duration,
        episodes: req.body.episodes,
        seasons: req.body.seasons,
        studio_id: req.body.studio_id,
        rating_id: req.body.rating_id,
        genre_id: req.body.genre_id
        
      },
      {
        where: {
          catalogue_id: req.body.catalogue_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Viewer Ratings Endpoints//////////
/// /////////////////////////////////
router.get('/viewer_ratings', async (req, res) => {
  try {
    const ratings = await db.ViewerRatings.findAll();
    const reply = ratings.length > 0 ? { data: ratings } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/viewer_ratings/:rating_id', async (req, res) => {
  try {
    const ratings = await db.ViewerRatings.findAll({
      where: {
        rating_id: req.params.rating_id
      }
    });
    res.json(ratings);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/viewer_ratings', async (req, res) => {
  try {
    await db.ViewerRatings.update(
      {
        rating_description: req.body.rating_description
      },
      {
        where: {
          rating_id: req.body.rating_id
        }
      }
    );
    res.send('Rating Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Studio Endpoints//////////
/// /////////////////////////////////
router.get('/studio', async (req, res) => {
  try {
    const studios = await db.Studio.findAll();
    const reply = studios.length > 0 ? { data: studios } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/studio/:studio_id', async (req, res) => {
  try {
    const studios = await db.Studio.findAll({
      where: {
        studio_id: req.params.studio_id
      }
    });
    res.json(studios);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/studio', async (req, res) => {
  console.info('Post request to /studio', req.body);
  //need to know what is happening to our routes ^
  const existingStudio = await db.Studio.findAll({
    where: {
      studio_name: req.body.studio_name
    }
  });
  const studios = await db.Studio.findAll();
  console.log(existingStudio);
  const currentId = (await studios.length) + 1;
  try {
    const newStudio = await db.Studio.create({
      studio_id: currentId,
      studio_name: req.body.studio_name,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    });
   // res.json(newStudio);
   res.json({message: 'not yet'})
  } catch (err) {
    console.error(err);
    res.json('Server error');
  }
});

router.put('/studio', async (req, res) => {
  try {
    await db.Studio.update(
      {
        studio_name: req.body.studio_name,
        latitude: req.body.latitude,
        longitude: req.body.longitude
      },
      {
        where: {
          studio_id: req.body.studio_id
        }
      }
    );
    res.send('Studio Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/studio/:studio_id', async (req, res) => {
  try {
    await db.Studio.destroy({
      where: {
        studio_id: req.params.studio_id
      }
    });
    res.send('Studio Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Rentals Endpoints//////////
/// /////////////////////////////////

router.get('/rental_info', async (req, res) => {
  try {
    const rental = await db.Rentals.findAll();
    const reply = rental.length > 0 ? { data: rental } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/rental_info/:confirmation_num', async (req, res) => {
  try {
    const rental = await db.Rentals.findAll({
      where: {
        confirmation_num: req.params.confirmation_num
      }
    });
    res.json(rental);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/rental_info', async (req, res) => {
  try {
    await db.Rentals.update(
      {
        purchase_type: req.body.purchase_type,
        purchase_date: req.body.purchase_date,
        invoice_id: req.body.invoice_id,
        catalogue_id: req.body.catalogue_id
      },
      {
        where: {
          confirmation_num: req.body.confirmation_num
        }
      }
    );
    res.send('Rental Confirmation Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/rental_info/:confirmation_num', async (req, res) => {
  try {
    await db.Rentals.destroy({
      where: {
        confirmation_num: req.params.confirmation_num
      }
    });
    res.send('Rental Confirmation Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Invoices Endpoints//////////
/// /////////////////////////////////
router.get('/invoices', async (req, res) => {
  try {
    const receipts = await db.Invoices.findAll();
    const reply = receipts.length > 0 ? { data: receipts } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/invoices/:invoice_id', async (req, res) => {
  try {
    const receipts = await db.Invoices.findAll({
      where: {
        invoice_id: req.params.invoice_id
      }
    });
    res.json(receipts);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/invoices', async (req, res) => {
  try {
    await db.Invoices.update(
      {
        credit_total: req.body.credit_total,
        invoice_date: req.body.invoice_date,
        invoice_total: req.body.invoice_total,
        customer_id: req.body.customer_id
      },
      {
        where: {
          invoice_id: req.body.invoice_id
        }
      }
    );
    res.send('Invoice Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/invoices/:invoice_id', async (req, res) => {
  try {
    await db.Invoices.destroy({
      where: {
        invoice_id: req.params.invoice_id
      }
    });
    res.send('Invoice Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Genre Endpoints//////////
/// /////////////////////////////////

router.get('/genre', async (req, res) => {
  try {
    const genres = await db.Genre.findAll();
    const reply = genres.length > 0 ? { data: genres } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/genre/:genre_id', async (req, res) => {
  try {
    const genres = await db.Genre.findAll({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.json(genres);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/genre', async (req, res) => {
  try {
    await db.Genre.update(
      {
        genre_name: req.body.genre_name
      },
      {
        where: {
          genre_id: req.body.genre_id
        }
      }
    );
    res.send('Genre Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/genre/:genre_id', async (req, res) => {
  try {
    await db.Genre.destroy({
      where: {
        genre_id: req.params.genre_id
      }
    });
    res.send('Genre Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////////Customer Endpoints//////////
/// /////////////////////////////////

router.get('/customer', async (req, res) => {
  try {
    const customers = await db.Customers.findAll();
    const reply = customers.length > 0 ? { data: customers } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/customer/:customer_id', async (req, res) => {
  try {
    const customers = await db.Customers.findAll({
      where: {
        customer_id: req.params.customer_id
      }
    });
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/customer', async (req, res) => {
  try {
    await db.Customers.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        customer_address: req.body.customer_address,
        customer_city: req.body.customer_city,
        customer_state: req.body.customer_state,
        customer_zip: req.body.customer_zip,
        customer_age: req.body.customer_age,
        customer_email: req.body.customer_email
      },
      {
        where: {
          customer_id: req.body.customer_id
        }
      }
    );
    res.send('Customer Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/customer/:customer_id', async (req, res) => {
  try {
    await db.Customers.destroy({
      where: {
        customer_id: req.params.customer_id
      }
    });
    res.send('Customer Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////
const mainCustom = `SELECT title, genre_name, rating_description, studio_name, year, SUM(invoice_total) as total_invoices
FROM genre 
JOIN tv_movie USING (genre_id) 
  JOIN studio USING (studio_id)
  LEFT JOIN rental_info USING (catalogue_id)
  LEFT JOIN invoices USING (invoice_id)
  JOIN viewer_ratings USING (rating_id)
GROUP BY (title)
ORDER BY title;`;

router.route('/mainCustom')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(mainCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      res.send('Server error');
    }
  })

  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });

/*
const studioLocation = `SELECT studio_name, latitude, longitude
FROM studio;`;

router.route('/studioLocation')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(studioLocation, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      res.send('Server error');
    }
  })

  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });

  

const movieCustom = `SELECT title, genre_name, rating_description, studio_name, year, SUM(invoice_total) as total_invoices
FROM genre 
JOIN tv_movie USING (genre_id) 
  JOIN studio USING (studio_id)
  LEFT JOIN rental_info USING (catalogue_id)
  LEFT JOIN invoices USING (invoice_id)
  JOIN viewer_ratings USING (rating_id)
WHERE episodes IS NULL && seasons IS NULL
GROUP BY (title)
ORDER BY title;`;

router.route('/movieCustom')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(movieCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      res.send('Server error');
    }
  })

  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });

const tvCustom = `SELECT title, genre_name, rating_description, studio_name, year, SUM(invoice_total) as total_invoices
FROM genre 
JOIN tv_movie USING (genre_id) 
  JOIN studio USING (studio_id)
  LEFT JOIN rental_info USING (catalogue_id)
  LEFT JOIN invoices USING (invoice_id)
  JOIN viewer_ratings USING (rating_id)
WHERE episodes IS NOT NULL && seasons IS NOT NULL
GROUP BY (title)
ORDER BY title;`;

router.route('/tvCustom')
  .get(async (req, res) => {
    try {
      const result = await db.sequelizeDB.query(tvCustom, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      res.send('Server error');
    }
  })

  .post(async (req, res) => {
    res.send('Action unavailable');
  })
  .put(async (req, res) => {
    res.send('Action unavailable');
  })
  .delete(async (req, res) => {
    res.send('Action unavailable');
  });

const mealMapCustom = `SELECT hall_name,
  hall_address,
  hall_lat,
  hall_long,
  meal_name
FROM
  Meals m
INNER JOIN Meals_Locations ml 
  ON m.meal_id = ml.meal_id
INNER JOIN Dining_Hall d
ON d.hall_id = ml.hall_id;`;
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
*/
export default router;
