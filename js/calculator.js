jQuery(function () {
    $ = jQuery;
    var form = $('.pq-calculate');
    var weekdays = $('#number_of_weekdays_in_a_year');
    var weekdays_off = form.find('.step_1 .subtraction input');
    var non_working_days = $('.non_working_days span');
    var billable_days = $('.billable_days_in_a_year span');
    var operating_costs = form.find('.step_2 .cost input');
    var annual_operating_costs = $('.annual_operating_costs span');
    var daily_overhead = $('.daily_overhead span');
    var project_value = $('.step_3 #project_value');
    var target_salary = $('#target_salary');
    var billable_rate = $('.billable_rate');
    var daily_billable_rate = $('.billable_rate .daily_billable_rate span');
    var ideal_hourly_rate = $('.billable_rate .ideal_hourly_rate span');
    var ideal_number_projects_per_year = $('.billable_rate .ideal_number_projects_per_year span');
    var clear_results = form.find('.clear_results');
 
    var float_val_or_zero = function (input) {
       var value = parseFloat(input.val().replace(/,/g, ''));
       if (isNaN(value) || value < 0) {
          return 0;
       }
       return value;
    }
 
    var int_val_or_zero = function (input) {
       var value = parseInt(input.val().replace(/,/g, ''));
       if (isNaN(value) || value < 0) {
          return 0;
       }
       return value;
    }
 
    var number_to_currency = function (num) {
       if (isNaN(num))
          num = 0;
 
       return '$' + num.toFixed(2).replace(/(d)(?=(ddd)+(?!d))/g, "$1,");
    }
 
    var update_text = function (result_span, text) {
       result_span = $(result_span);
 
       if (result_span.text() == text) {
          return false;
       }
 
       result_span.fadeOut(300, function () {
          result_span.text(text);
          result_span.fadeIn(300);
       });
    }
 
    var save_form_values = function () {
       var values = {};
       $.each(form.find('input[type=text]'), function () {
          var self = $(this);
          values[this.name] = self.val();
       });
 
       localStorage['consulting-fees-calculator.html_form_values'] = JSON.stringify(values);
    }
 
    var load_form_values = function () {
       if (localStorage['consulting-fees-calculator.html_form_values'] == null || localStorage['consulting-fees-calculator.html_form_values'] == '')
          return;
 
       var values = JSON.parse(localStorage['consulting-fees-calculator.html_form_values']);
 
       $.each(values, function (key, value) {
          form.find('input[name=' + key + ']').val(value);
       });
    }
 
    var reset_form = function () {
       var output_html = billable_rate.html();
 
       localStorage.removeItem('consulting-fees-calculator.html_form_values');
       form[0].reset();
 
       billable_rate.html(output_html);
       daily_billable_rate = $('.billable_rate .daily_billable_rate span');
       ideal_hourly_rate = $('.billable_rate .ideal_hourly_rate span');
       ideal_number_projects_per_year = $('.billable_rate .ideal_number_projects_per_year span');
 
       form.submit();
    }
 
    var calculate_non_working_days = function () {
       var days = 0;
       $.each(weekdays_off, function () {
          days += int_val_or_zero($(this));
       });
       return days;
    }
 
    var calculate_billable_days = function () {
       var num_weekdays = int_val_or_zero(weekdays);
       if (num_weekdays > 365) {
          num_weekdays = 365;
       }
 
       var value = num_weekdays - calculate_non_working_days();
       if (value < 0)
          value = 0;
 
       return value;
    }
 
    var calculate_costs = function () {
       var costs = 0;
       $.each(operating_costs, function () {
          costs += float_val_or_zero($(this));
       });
       return costs;
    }
 
    var calculate_daily_overhead = function () {
       return calculate_costs() / calculate_billable_days();
    }
 
    var update_step1_results = function () {
       update_text(non_working_days, calculate_non_working_days());
       update_text(billable_days, calculate_billable_days());
    }
 
    var update_step2_results = function () {
       update_text(annual_operating_costs, number_to_currency(calculate_costs()));
       update_text(daily_overhead, number_to_currency(calculate_daily_overhead()));
    }
 
    var update_billable_rates = function () {
       if (billable_days.text() == '0') {
          alert('There needs to be at least one billable day to proceed.');
          return;
       }
 
       var float_project_value = float_val_or_zero(project_value);
       var float_target_salary = float_val_or_zero(target_salary);
       var daily_rate = (float_target_salary / calculate_billable_days()) + calculate_daily_overhead();
 
       billable_rate.fadeOut(300, function () {
          if (float_project_value > 0 && float_target_salary > 0) {
             ideal_number_projects_per_year.text(Math.ceil((float_target_salary + calculate_costs()) / float_project_value));
             ideal_number_projects_per_year.parent().show();
          } else {
             ideal_number_projects_per_year.parent().hide();
          }
 
          daily_billable_rate.text(number_to_currency(daily_rate));
          ideal_hourly_rate.text(number_to_currency(daily_rate / 8));
          billable_rate.fadeIn(300);
       });
    }
 
 
    weekdays.blur(update_step1_results).blur(save_form_values);
    $.each(weekdays_off, function () {
       $(this).blur(update_step1_results).blur(save_form_values);
    });
 
    $.each(operating_costs, function () {
       $(this).blur(update_step2_results).blur(save_form_values);
    });
 
    project_value.blur(save_form_values);
    target_salary.blur(save_form_values);
 
    form.submit(function () {
       update_billable_rates();
       save_form_values();
       return false;
    });
 
    clear_results.click(function () {
       reset_form();
       daily_billable_rate.text('$0.00');
       ideal_hourly_rate.text('$0.00');
       ideal_number_projects_per_year.parent().hide();
       return false;
    });
 
 
    load_form_values();
    update_step1_results();
    update_step2_results();
    update_billable_rates();
 });