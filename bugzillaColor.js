var severity = ['bz_severity_urgent', 'bz_severity_high', 'bz_severity_low'];
var priority = ['bz_priority_urgent', 'bz_priority_high', 'bz_priority_low'];

jQuery.each(severity, function(key, value) {
	jQuery('.'+value).removeClass(value).addClass('bz_severity_medium');
});

jQuery.each(priority, function(key, value) {
	jQuery('.'+value).removeClass(value).addClass('bz_priority_medium');
});

//Hide unused stuff
jQuery('#alias_edit_area:parent').parent().parent().hide();
jQuery('#bz_url_edit_container:parent').parent().parent().hide();
jQuery('#field_label_see_also:parent').parent().hide();
jQuery('#field_label_cf_fixed_in:parent').parent().hide();
jQuery('#field_label_cf_cust_facing:parent').parent().hide();
jQuery('#field_label_cf_release_notes:parent').parent().hide();
jQuery('#field_label_cf_pm_score:parent').parent().hide();
jQuery('#field_label_cf_build_id:parent').parent().hide();
jQuery('#field_label_cf_targetrelease:parent').parent().hide();
jQuery('#field_label_cf_last_closed:parent').parent().hide();
jQuery('#field_label_cf_environment:parent').parent().hide();
jQuery('#bz_restrict_group_visibility_help:parent').parent().hide();
jQuery('#comments:parent').parent().parent().css('width', '100%');
jQuery('.bz_comment_table').css('width', '100%');
jQuery('.bz_collapse_expand_comments:parent').parent().hide();
jQuery('.bz_comment').css('width', '99%');

//Set top bar to "hover"
jQuery('#titles').css('position', 'fixed').css('left', '0px').css('top', '0px').css('width', '100%').css('height', '30px');
jQuery('#header .links').css('margin-top', '65px');
jQuery('#information').hide();
jQuery('#title').html(jQuery('#title').html().replace('Red Hat Bugzilla – ',''));

//Create new top bar
jQuery('#banner').css('position', 'fixed').css('left', '0px').css('top', '30px').css('width', '100%').css('height', '30px').css('background-color', '#8c8f91').css('color', '#fff').css('font-weight', 'bold').css('line-height', '30px').css('margin', '0px').css('padding-left', '0.5em').css('padding-right', '0.5em');

try {
	var stat = jQuery('#static_bug_status').html().replace(/ (.*)/i, '').replace(/ (.*)/i, '');
	var assign = jQuery('#bz_assignee_edit_container span span a span').html();
	var milestone = jQuery('#target_milestone option:selected').html();

	jQuery('#banner').append('<span id="custom_status" style="width: 10%; display: inline-block; text-align: center;">'+stat+'</span>');
	jQuery('#banner').append('<span id="custom_owner" style="width: 80%; display: inline-block; text-align: center;">'+assign+'</span>');
	jQuery('#banner').append('<span id="custom_owner" style="width: 10%; display: inline-block; text-align: center;">'+milestone+'</span>');

} catch(err) {
	jQuery('#banner').hide();
	jQuery('#titles').hide();
	jQuery('#header .links').css('margin-top', '5px');
}
