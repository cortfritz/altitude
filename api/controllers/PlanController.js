/**
 * PlanController
 *
 * @description :: Server-side logic for managing plans
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Joi = require('joi');


var m1 =  {
  name: 'm1'
  , begin: '5/5/2014'
  , end: '8/29/2014'
  , iterations: [
    {
      name: 'i1'
      , begin: '5/5/2014'
      , end: '5/30/2014'
      , weeks: [ 
        {
          name: 'w1'
          , begin: '5/5/2014'
          , work: {}
        }

      , {
          name: 'w2'
          , begin: '5/12/2014'
          , work: {}
        }

        , {
          name: 'w3'
          , begin: '5/19/2014'
          , work: {}
        }
        , {
          name: 'w4'
          , begin: '5/26/2014'
          , work: {}
        }]
      }
    

    , {
      name: 'i2'
      , begin: '6/2/2014'
      , end: '6/27/2014'
      , weeks: [
        {
          name: 'w5'
          , begin: '6/2/2014'
          , work: {}
        }
        , {
          name: 'w6'
          , begin: '6/9/2014'
          , work: {}
        }
        , {
          name: 'w7'
          , begin: '6/16/2014'
          , work: {}
        }
        , {
          name: 'w8'
          , begin: '6/23/2014'
          , work: {}
        }
      ]
    }
    , {
      name: 'i3'
      , begin: '7/7/2014'
      , end: '8/1/2014'
      , weeks: [
        {
          name: 'w9'
          , begin:'7/7/2014'
          , work: {}
        }
        , {
          name: 'w10'
          , begin: '7/14/2014'
          , work: {}
        }
        , {
          name: 'w11'
          , begin: '7/21/2014'
          , work: {}
        }
        , {
          name: 'w12'
          , begin: '7/28/2014'
          , work: {}
        }
      ]
    }
    , {
      name: 'i4'
      , begin: '8/4/2014'
      , end: '8/29/2014'
      , weeks: [
        {
          name: 'w13'
          , begin: '8/4/2014'
          , work: {}
        }
        , {
          name: 'w14'
          , begin: '8/11/2014'
          , work: {}
        }
        , {
          name: 'w15'
          , begin: '8/18/2014'
          , work: {}
        }
        , {
          name: 'w16'
          , begin: '8/25/2014'
          , work: {}         
        }       
      ]

    }
  ]
}


var m2 = {
  name: 'm2'
  , begin: '9/2/2014'
  , end: '1/2/2015'
  , iterations: [

    {
      name: 'i5'
      , begin: '9/2/2014'
      , end: '9/26/2014'
      , weeks: [
        {
          name: 'w17'
          , begin: '9/2/2014'
          , work: {}
        }
        , {
          name: 'w18'
          , begin: '9/8/2014'
          , work: {}
        }
        , {
          name: 'w19'
          , begin: '9/15/2014'
          , work: {}
        }
        , {
          name: 'w20'
          , begin: '9/22/2014'
          , work: {}
        }

      ]
    }
    , {
      name: 'i6'
      , begin: '9/29/2014'
      , end: '10/24/2014'
      , weeks: [
        {
          name: 'w21'
          , begin: '9/29/2014'
          , work: {}
        }
        , {
          name: 'w22'
          , begin: '10/6/2014'
          , work: {}
        }
        , {
          name: 'w23'
          , begin: '10/13/2014'
          , work: {}
        }
        , {
          name: 'w24'
          , begin: '10/20/2014'
          , work: {}         
        }       
      ]
    }
    , {
      name: 'i7'
      , begin: '10/27/2014'
      , end: '11/21/2014'
      , weeks: [
        {
          name: 'w25'
          , begin: '10/27/2014'
          , work: {}
        }
        , {
          name: 'w26'
          , begin: '11/3/2014'
          , work: {}
        }
        , {
          name: 'w27'
          , begin: '11/10/2014'
          , work: {}
        }
        , {
          name: 'w28'
          , begin: '11/17/2014'
          , work: {}         }       ]

    }
    , {
      name: 'i8'
      , begin: '11/24/2014'
      , end: '1/2/2015'
      , weeks: [
        {
          name: 'w29'
          , begin: '11/24/2014'
          , work: {}
        }, {
          name: 'w30'
          , begin: '12/1/2014'
          , work: {}
        }, {
          name: 'w31'
          , begin: '12/8/2014'
          , work: {}
        }, {
          name: 'w32'
          , begin: '12/15/2014'
          , work: {}
        }, {
          name: 'w33'
          , begin: '12/22/2014'
          , work: {}
        }, {
          name: '34'
          , begin: '12/29/2014'
          , work: {}
        }
      ]

    }
  ]
}

var m3 = {
  name: 'm3'
  , begin: '1/5/2015'
  , end: '4/24/2015'
  , iterations: [
    {
      name: 'i9'
      , begin: '1/5/2015'
      , end: '1/30/2015'
      , weeks: [
        {
          name: 'w35'
          , begin: '1/5/2015'
          , work: {}
        }
        , {
          name: 'w36'
          , begin: '1/12/2015'
          , work: {}
        }
        , {
          name: 'w37'
          , begin: '1/19/2015'
          , work: {}
        }
        , {
          name: 'w38'
          , begin: '1/26/2015'
          , work: {}         }       ]


    }
    , {
      name: 'i10'
      , begin: '2/2/2015'
      , end: '2/27/2015'
      , weeks: [
        {
          name: 'w39'
          , begin: '2/2/2015'
          , work: {}
        }
        , {
          name: 'w40'
          , begin: '2/9/2015'
          , work: {}
        }
        , {
          name: 'w41'
          , begin: '2/16/2015'
          , work: {}
        }
        , {
          name: 'w42'
          , begin: '2/23/2015'
          , work: {}         }       ]
    }
    , {
      name: 'i11'
      , begin: '3/2/2015'
      , end: '3/27/2015'
      , weeks: [
        {
          name: 'w43'
          , begin: '3/2/2015'
          , work: {}
        }
        , {
          name: 'w44'
          , begin: '3/9/2015'
          , work: {}
        }
        , {
          name: 'w45'
          , begin: '3/16/2015'
          , work: {}
        }
        , {
          name: 'w46'
          , begin: '3/23/2015'
          , work: {}         }       ]

    }
    , {
      name: 'i12'
      , begin: '3/30/2015'
      , end: '4/24/2015'
      , weeks: [
        {
          name: 'w47'
          , begin: '3/30/2015'
          , work: {}
        }
        , {
          name: 'w48'
          , begin: '4/6/2015'
          , work: {}
        }
        , {
          name: 'w49'
          , begin: '4/13/2015'
          , work: {}
        }
        , {
          name: 'w50'
          , begin: '4/20/2015'
          , work: {}
        }
      ]

    }
  ]

}

var postThreshold = {
  name: 'post Threshold'
  , begin: '4/27/2015'
  , end: '5/1/2015'
  , iterations: [
    {
      name: 'i13'
      , begin: '4/27/2015'
      , end: '5/1/2015'
      , weeks: [
        {
          name: 'w51'
          , begin: '4/27/2015'
          , work: {}
        }
      ]
    }
  ]
}



function createSchedule(milestones) {
  var schedule = {milestones: milestones}
  var totalWeeks = 0
  for (var mkey in milestones) {
    var m = milestones[mkey]

    var milestoneWeeks = 0
    for (var ikey in m.iterations) {
      var i = m.iterations[ikey]

      var iterationWeeks = 0
      for (var wkey in i.weeks) {
        var w = i.weeks[wkey]
        iterationWeeks++
      }
      console.log(__filename,'mkey',mkey,'mile',schedule.milestones)
      schedule.milestones[mkey].iterations[ikey].numWeeks = iterationWeeks
      milestoneWeeks += iterationWeeks
    }
    schedule.milestones[mkey].numWeeks = milestoneWeeks
    totalWeeks += milestoneWeeks
  }

  return schedule
}

var schedule = createSchedule([m1,m2,m3,postThreshold])


module.exports = {
  default: function renderHomePage(req,res){

    var schema = Joi.object().keys({

      dateOffset: Joi.date().min('4/4/1975').max('12/31/2999').default(new Date())
      , weekOffset: Joi.number().integer().min(-1000).max(1000).default(0)
      , iterationOffset: Joi.number().integer().min(-1000).max(1000).default(0)
      , milestoneOffset: Joi.number().integer().min(-1000).max(1000).default(0)

    })
    Joi.validate({
      dateOffset: req.query.dateOffset
      , weekOffset: req.query.weekOffset
      , iterationOffset: req.query.iterationOffset
      , milestoneOffset: req.query.milestoneOffset
    }, schema, function (err, value) {
      if(err){
        console.log(__filename,err)
        return(err)
      }
      value['schedule'] = schedule
      console.log(__filename,'validated',value)
      res.view(value)
    });

  }
	
};

