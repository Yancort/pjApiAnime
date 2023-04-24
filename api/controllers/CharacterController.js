/**
 * CharacterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    get: function(req, res){
        Character.find()
            .then(function(Character){
                if(!Character || Character.length == 0){
                    return res.send({
                        'success': false,
                        'message': 'No record found'
                    })
                }

                return res.send({
                    'success':true,
                    'message': 'Record fetched',
                    'data': Character
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success':false,
                    'message': 'unable to fetch records'
                })
            })
    },

    create: function(req, res){
        sails.log.debug(req.allParams())
        Character.create(req.allParams())
            .then(function(Character){
                return res.send({
                    'success': true,
                    'message': 'Record created successfully'
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Unable to create record'
                    })
            })
    },

    update: function(req, res){
        sails.log.debug(req.param('id'))

        Character.update(req.param('id'), req.allParams())
            .then(function(Character){
                return res.send({
                    'success': true,
                    'message': 'Record Update',
                    'data': Character
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Unable to update record'
                })
            })
    },

    delete: function(req, res){
        Character.destroy(req.param('id'))
            .then(function(Character){
                return res.send({
                    'success': true,
                    'message': 'Record deleted successfully',
                    'data': Character
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Unable to delete record'
                })
            })

    }
};


