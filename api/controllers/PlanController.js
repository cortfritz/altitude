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
  ,iterations: [
    {
      name: 'i1'
      , begin: '5/5/2014'
      , end: '5/30/2014'
      , weeks: 
        w1: {
          name: 'w1'
          , begin: '5/5/2014'
          , work: {}
        }

      , w2: {
          name: 'w2'
          , begin: '5/12/2014'
          , work: {}
        }

        , w3: {
          name: 'w3'
          , begin: '5/19/2014'
          , work: {}
        }
        , w4: {
          name: 'w4'
          , begin: '5/26/2014'
          , work: {}
        }


      }
    }

    , i2: {
      name: 'i2'
      , begin: '6/2/2014'
      , end: '6/27/2014'
      , weeks: {
        w5: {
          name: 'w5'
          , begin: '6/2/2014'
          , work: {}
        }
        , w6: {
          name: 'w6'
          , begin: '6/9/2014'
          , work: {}
        }
        , w7: {
          name: 'w7'
          , begin: '6/16/2014'
          , work: {}
        }
        , w8: {
          name: 'w8'
          , begin: '6/23/2014'
          , work: {}
        }
      }
    }
    , i3: {
      name: 'i3'
      , begin: '7/7/2014'
      , end: '8/1/2014'
      , weeks: {
        w9: {
          name: 'w9'
          , begin:'7/7/2014'
          , work: {}
        }
        , w10: {
          name: 'w10'
          , begin: '7/14/2014'
          , work: {}
        }
        , w11: {
          name: 'w11'
          , begin: '7/21/2014'
          , work: {}
        }
        , w12: {
          name: 'w12'
          , begin: '7/28/2014'
          , work: {}
        }
      }
    }
    , i4: {
      name: 'i4'
      , begin: '8/4/2014'
      , end: '8/29/2014'
      , weeks: {
        w13: {
          name: 'w13'
          , begin: '8/4/2014'
          , work: {}
        }
        , w14: {
          name: 'w14'
          , begin: '8/11/2014'
          , work: {}
        }
        , w15: {
          name: 'w15'
          , begin: '8/18/2014'
          , work: {}
        }
        , w16: {
          name: 'w16'
          , begin: '8/25/2014'
          , work: {}
        }
      }
    }

  }
}


var m2 = {
  name: 'm2'
  , begin: '9/2/2014'
  , end: '1/2/2015'
  , iterations: {

    i5: {
      name: 'i5'
      , begin: '9/2/2014'
      , end: '9/26/2014'
      , weeks: {
        w17: {
          name: 'w17'
          , begin: '9/2/2014'
          , work: {}
        }
        , w18: {
          name: 'w18'
          , begin: '9/8/2014'
          , work: {}
        }
        , w19: {
          name: 'w19'
          , begin: '9/15/2014'
          , work: {}
        }
        , w20: {
          name: 'w20'
          , begin: '9/22/2014'
          , work: {}
        }

      }
    }
    , i6: {
      name: 'i6'
      , begin: '9/29/2014'
      , end: '10/24/2014'
      , weeks: {
        w21: {
          name: 'w21'
          , begin: '9/29/2014'
          , work: {}
        }
        , w22: {
          name: 'w22'
          , begin: '10/6/2014'
          , work: {}
        }
        , w23: {
          name: 'w23'
          , begin: '10/13/2014'
          , work: {}
        }
        , w24: {
          name: 'w24'
          , begin: '10/20/2014'
          , work: {}
        }
      }
    }
    , i7: {
      name: 'i7'
      , begin: '10/27/2014'
      , end: '11/21/2014'
      , weeks: {
        w25: {
          name: 'w25'
          , begin: '10/27/2014'
          , work: {}
        }
        , w26: {
          name: 'w26'
          , begin: '11/3/2014'
          , work: {}
        }
        , w27: {
          name: 'w27'
          , begin: '11/10/2014'
          , work: {}
        }
        , w28: {
          name: 'w28'
          , begin: '11/17/2014'
          , work: {}
        }
      }

    }
    , i8: {
      name: 'i8'
      , begin: '11/24/2014'
      , end: '1/2/2015'
      , weeks: {
        w29: {
          name: 'w29'
          , begin: '11/24/2014'
          , work: {}
        }, w30: {
          name: 'w30'
          , begin: '12/1/2014'
          , work: {}
        }, w31: {
          name: 'w31'
          , begin: '12/8/2014'
          , work: {}
        }, w32: {
          name: 'w32'
          , begin: '12/15/2014'
          , work: {}
        }, w33: {
          name: 'w33'
          , begin: '12/22/2014'
          , work: {}
        }, w34: {
          name: '34'
          , begin: '12/29/2014'
          , work: {}
        }
      }
    }
  }
}

var m3 = {
  name: 'm3'
  , begin: '1/5/2015'
  , end: '4/24/2015'
  , iterations: {
    i9: {
      name: 'i9'
      , begin: '1/5/2015'
      , end: '1/30/2015'
      , weeks: {
        w35: {
          name: 'w35'
          , begin: '1/5/2015'
          , work: {}
        }
        , w36: {
          name: 'w36'
          , begin: '1/12/2015'
          , work: {}
        }
        , w37: {
          name: 'w37'
          , begin: '1/19/2015'
          , work: {}
        }
        , w38: {
          name: 'w38'
          , begin: '1/26/2015'
          , work: {}
        }
      }


    }
    , i10: {
      name: 'i10'
      , begin: '2/2/2015'
      , end: '2/27/2015'
      , weeks: {
        w39: {
          name: 'w39'
          , begin: '2/2/2015'
          , work: {}
        }
        , w40: {
          name: 'w40'
          , begin: '2/9/2015'
          , work: {}
        }
        , w41: {
          name: 'w41'
          , begin: '2/16/2015'
          , work: {}
        }
        , w42: {
          name: 'w42'
          , begin: '2/23/2015'
          , work: {}
        }
      }
    }
    , i11: {
      name: 'i11'
      , begin: '3/2/2015'
      , end: '3/27/2015'
      , weeks: {
        w43: {
          name: 'w43'
          , begin: '3/2/2015'
          , work: {}
        }
        , w44: {
          name: 'w44'
          , begin: '3/9/2015'
          , work: {}
        }
        , w45: {
          name: 'w45'
          , begin: '3/16/2015'
          , work: {}
        }
        , w46: {
          name: 'w46'
          , begin: '3/23/2015'
          , work: {}
        }
      }

    }
    , i12: {
      name: 'i12'
      , begin: '3/30/2015'
      , end: '4/24/2015'
      , weeks: {
        w47: {
          name: 'w47'
          , begin: '3/30/2015'
          , work: {}
        }
        , w48: {
          name: 'w48'
          , begin: '4/6/2015'
          , work: {}
        }
        , w49: {
          name: 'w49'
          , begin: '4/13/2015'
          , work: {}
        }
        , w50: {
          name: 'w50'
          , begin: '4/20/2015'
          , work: {}
        }
      }

    }
  }

}

var postThreshold = {
  name: 'post Threshold'
  , begin: '4/27/2015'
  , end: '5/1/2015'
  , iterations: {
    i13: {
      name: 'i13'
      , begin: '4/27/2015'
      , end: '5/1/2015'
      , weeks: {
        w51: {
          name: 'w51'
          , begin: '4/27/2015'
          , work: {}
        }
      }
    }
  }
}



function createSchedule(milestones) {
  var schedule = {milestones: {}}
  for (var mkey in milestones) {
    var m = milestones[mkey]

    var milestoneObject = {}
    milestoneObject[mkey] = m


    var milestoneWeeks = 0
    for (var ikey in m.iterations) {
      var i = m.iterations[ikey]
      var iterationObject = {}
      iterationObject[ikey] = i
      iterationArray.push(iterationObject)

      var iterationWeeks = 0
      var weekArray = []
      for (var wkey in i.weeks) {
        var w = i.weeks[wkey]
        var weekObject = {}
        weekObject[wkey] = w
        weekArray.push(weekObject)

        iterationWeeks++
      }
      schedule.milestones[mkey].iterations[ikey].numWeeks = iterationWeeks
      schedule.milestones[mkey].iterations[ikey].weekArray = weekArray
      milestoneWeeks += iterationWeeks
    }
    schedule.milestones[mkey].numWeeks = milestoneWeeks
    schedule.milestones[mkey].milestoneArray = iterationArray
  }
  schedule['milestoneArray'] = milestoneArray
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

