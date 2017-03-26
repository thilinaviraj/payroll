            
$(document).ready(function() {
    $('#contactForm').bootstrapValidator({
        container: '#messages',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
                }
            },

            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    }
                }
            },

            contactNumber: {
                validators: {
                    notEmpty: {
                        message: 'The contact number is required and cannot be empty'
                    },

                    stringLength: {
                        max: 9,
                        min:9,
                        message: 'The contact number must be 9 characters long'
                    }
                }
            },


            address: {
                validators: {
                    notEmpty: {
                        message: 'The address is required and cannot be empty'
                    },
                    stringLength: {
                        max: 100,
                        message: 'The address must be less than 100 characters long'
                    }
                }
            },


            dateOfBirth: {
                validators: {
                    notEmpty: {
                        message: 'The content is required and cannot be empty'
                    },

                callback: {

                    message: 'The date is not in the range',
                    callback: function(value, validators) {
                        var m = new moment(value, 'YYYY/MM/DD', true);
                        if (!m.isValid()) {
                            return false;
                        }
                        return m.isAfter('2000/01/01') && m.isBefore('2020/12/30');
                    }
                }

                }
            }
        }
    });
});
