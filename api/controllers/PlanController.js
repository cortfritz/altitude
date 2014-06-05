/**
 * PlanController
 *
 * @description :: Server-side logic for managing plans
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */



var m1 =  {
  begin: '5/5/2014'
  , end: '8/29/2014'
  ,iterations: {
    i1: {
      begin: '5/5/2014'
      , end: '5/30/2014'
      , weeks: {
        w1: {
          begin: '5/5/2014'
          , work: {}
        }
      , w2: {
          begin: '5/12/2014'
          , work: {}
        }
        , w3: {
          begin: '5/19/2014'
          , work: {}
        }
        , w4: {
          begin: '5/26/2014'
          , work: {}
        }

      }
    }
    , i2: {
      begin: '6/2/2014'
      , end: '6/27/2014'
      , weeks: {
        w5: {
          begin: '6/2/2014'
          , work: {}
        }
        , w6: {
          begin: '6/9/2014'
          , work: {}
        }
        , w7: {
          begin: '6/16/2014'
          , work: {}
        }
        , w8: {
            begin: '6/23/2014'
          , work: {}
        }
      }
    }
    , i3: {
      begin: '7/7/2014'
      , end: '8/1/2014'
      , weeks: {
        w9: {
          begin: '7/7/2014'
          , work: {}
        }
        , w10: {
          begin: '7/14/2014'
          , work: {}
        }
        , w11: {
          begin: '7/21/2014'
          , work: {}
        }
        , w12: {
          begin: '7/28/2014'
          , work: {}
        }
      }
    }
    , i4: {
      begin: '8/4/2014'
      , end: '8/29/2014'
      , weeks: {
        w13: {
          begin: '8/4/2014'
          , work: {}
        }
        , w14: {
          begin: '8/11/2014'
          , work: {}
        }
        , w15: {
          begin: '8/18/2014'
          , work: {}
        }
        , w16: {
          begin: '8/25/2014'
          , work: {}
        }
      }
    }

  }
}


var m2 = {
  begin: '9/2/2014'
  , end: '1/2/2015'
  , iterations: {

    i5: {
      begin: '9/2/2014'
      , end: '9/26/2014'
      , weeks: {
        w17: {
          begin: '9/2/2014'
          , work: {}
        }
        , w18: {
          begin: '9/8/2014'
          , work: {}
        }
        , w19: {
          begin: '9/15/2014'
          , work: {}
        }
        , w20: {
          begin: '9/22/2014'
          , work: {}
        }

      }
    }
    , i6: {
      begin: '9/29/2014'
      , end: '10/24/2014'
      , weeks: {
        w21: {
          begin: '9/29/2014'
          , work: {}
        }
        , w22: {
          begin: '10/6/2014'
          , work: {}
        }
        , w23: {
          begin: '10/13/2014'
          , work: {}
        }
        , w24: {
          begin: '10/20/2014'
          , work: {}
        }
      }
    }
    , i7: {
      begin: '10/27/2014'
      , end: '11/21/2014'
      , weeks: {
        w25: {
          begin: '10/27/2014'
          , work: {}
        }
        , w26: {
          begin: '11/3/2014'
          , work: {}
        }
        , w27: {
          begin: '11/10/2014'
          , work: {}
        }
        , w28: {
          begin: '11/17/2014'
          , work: {}
        }
      }

    }
    , i8: {
      begin: '11/24/2014'
      , end: '1/2/2015'
      , weeks: {
        w29: {
          begin: '11/24/2014', work: {}
        }, w30: {
          begin: '12/1/2014', work: {}
        }, w31: {
          begin: '12/8/2014', work: {}
        }, w32: {
          begin: '12/15/2014', work: {}
        }, w33: {
          begin: '12/22/2014', work: {}
        }, w34: {
          begin: '12/29/2014', work: {}
        }
      }
    }
  }
}

var m3 = {
  begin: '1/5/2015'
  , end: '4/24/2015'
  , iterations: {
    i9: {
      begin: '1/5/2015'
      , end: '1/30/2015'
      , weeks: {
        w35: {
          begin: '1/5/2015'
          , work: {}
        }
        , w36: {
          begin: '1/12/2015'
          , work: {}
        }
        , w37: {
          begin: '1/19/2015'
          , work: {}
        }
        , w38: {
          begin: '1/26/2015'
          , work: {}
        }
      }


    }
    , i10: {
      begin: '2/2/2015'
      , end: '2/27/2015'
      , weeks: {
        w39: {
          begin: '2/2/2015'
          , work: {}
        }
        , w40: {
          begin: '2/9/2015'
          , work: {}
        }
        , w41: {
          begin: '2/16/2015'
          , work: {}
        }
        , w42: {
          begin: '2/23/2015'
          , work: {}
        }
      }
    }
    , i11: {
      begin: '3/2/2015'
      , end: '3/27/2015'
      , weeks: {
        w43: {
          begin: '3/2/2015'
          , work: {}
        }
        , w44: {
          begin: '3/9/2015'
          , work: {}
        }
        , w45: {
          begin: '3/16/2015'
          , work: {}
        }
        , w46: {
          begin: '3/23/2015'
          , work: {}
        }
      }

    }
    , i12: {
      begin: '3/30/2015'
      , end: '4/24/2015'
      , weeks: {
        w47: {
          begin: '3/30/2015'
          , work: {}
        }
        , w48: {
          begin: '4/6/2015'
          , work: {}
        }
        , w49: {
          begin: '4/13/2015'
          , work: {}
        }
        , w50: {
          begin: '4/20/2015'
          , work: {}
        }
      }

    }
  }

}

var postThreshold = {
  begin: '4/27/2015'
  , end: '5/1/2015'
  , iterations: {
    i13: {
      begin: '4/27/2015'
      , end: '5/1/2015'
      , weeks: {
        w51: {
          begin: '4/27/2015', work: {}
        }
      }
    }
  }
}



function createSchedule(milestones) {
  var schedule = {milestones: {}}
  var milestoneArray = []
  for (var mkey in milestones) {
    var m = milestones[mkey]

    var milestoneObject = {}
    milestoneObject[mkey] = m
    milestoneArray.push(milestoneObject)

    schedule.milestones[mkey] = m

    var milestoneWeeks = 0
    var iterationArray = []
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
  schedule.milestoneArray = milestoneArray
  return schedule
}

var schedule = createSchedule({
  M1: m1,
  M2: m2,
  M3: m3,
  PostThreshold: postThreshold
  })


module.exports = {
  default: function renderHomePage(req,res){
    res.view(schedule)
  }
	
};

