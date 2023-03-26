/**
 * This class defines application clonstants
 */
export class Constants {
  public static NO_WHITE_SPACE_PATTERN = /^[a-zA-Z0-9\S]+(\s+[a-zA-Z0-9\S]+)*$/;
  // public static EMAIL_PATTERN = /[^@]+@[^@]+\.[a-zA-Z]{1,}$/,^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$;
  public static EMAIL_PATTERN = /^(?![0-9]+@)([a-z0-9а-я_.-]{4,100})@([a-zа-я_]{2,15})\.([a-zа-я]{2,15})(\.[a-zа-я]{2,9})?$/;
  public static PHONE_PATTERN = /^\([1-9]\d{2}\)\s\d{3}-\d{4}$/;
  public static ALPHANUMERIC_HYPHEN = /^([a-zA-Z0-9 -]+)$/;

  public static PAGE_TIME_INTERVAL = 30000;
  public static PAGE_LOADING = "Loading...";
  public static PAGE_PROCESSING = "Processing...";

  public static PAGE_STATUS_NEW = "New";
  public static PAGE_STATUS_PROGRESS = "In Process";
  public static PAGE_STATUS_COMPLETED = "Complete";

  public static PHONE = "(000) 000-0000";
  public static ZIP_CODE = "00000";

  public static SSN = "XXX-XX-0000";
  public static MIN_NO = "0000000-0000000000-0";
  public static CURRENCY = "separator.2";
  public static CURRENCY_PREFIX = "$ ";
  public static CURRENCY_SEPARATOR = ",";
  public static PERCENTAGE_SUFIX = "%";

  public static DATE = "M0/d0/0000";
  public static DATE_TIME24 = "M0/d0/0000 00:00:00";
  public static DATE_PICKER = "MM/DD/YYYY";

  public static LOAN_TERM_YRS = "^[0-9]{1,6}$";
  public static LOAN_TERM_MNTHS = "^[0-9]{1,6}$";
  public static ONLY_NUMBER = "^[0-9]*";

  public static NUMBER = "separator.0";
  public static PERCENTAGES = "separator.3";
  public static PERCENTAGE_2 = "separator.2";
  public static PERCENTAGE_3 = "separator.3";
  public static PERCENTAGE_4 = "separator.4";
  public static PERCENT_PATTERN = "^(?:100|\\d{1,2})(?:\\.\\d{1,3})?$";
  public static VIEW_TRANSACTION_EXCEL_FILE_NAME = "transaction.xlsx";
  public static VIEW_TRANSACTION_FINDING_EXCEL_FILE_NAME =
    "transaction_findings.xlsx";
  public static VIEW_LOAN_FINDING_EXCEL_FILE_NAME = "loan_findings.xlsx";
  public static VIEW_LOAN_DETAILS_EXCEL_FILE_NAME = "loan_details.xlsx";

  public static START_PAGE = "Start";
  public static COMPLETE_PAGE = "Complete";

  public static ASC_GOV_LINK =
    "https://www.asc.gov/National-Registries/FindAnAppraiser.aspx";

  public static DATA_SAVED_MSG = "Data saved successfully !!";
  public static SUCCESS_MSG = "Success";
  public static SUCCESS_MSG_SAVE= "Request approved successfully"
  public static SUCCESS_MSG_REJECT= "Request rejected successfully"
  public static ARE_YOU_SURE_MSG = "Confirmation ";
  public static ACT_DACT_PRODUCT_MSG = "Do you really want to activate/ deactivate product ?";
  public static ACT_DACT_PACKAGE_MSG = "Do you really want to activate/ deactivate package ?";
  public static ACT_DACT_CLIENT_MSG = "Do you really want to activate/ deactivate client ?";
  public static ERROR_MSG = "Oops!";
  public static SOMETHING_WRONG_ERROR_MSG = "Something went wrong !!";
  public static DATE_ERROR = "Enter correct end date";
  public static VALIDATION_ERROR_MSG = "Please enter start date";
  public static VALIDATION_MSG = "Remark field is mandatory if rejecting the request.";
  public static VALIDATION_MSG_COMMENT = "Please enter comment if rejecting the request.";

  public static ACTIVE_LABEL = "Active";
  public static ACTIONS_LABEL = "Actions";
  public static PRODUCT_NAME_LABEL = "Product Name";
  public static PRODUCT_TYPE_LABEL = "Product Type";
  public static VERSION_LABEL = "Product Version";
  public static ADD_PRODUCT_LABEL = "Do you really want to save product ?";
  public static REDEEM_REQUEST_SAVED ="Redeem request has been sent";

  public static PACKAGE_NAME_LABEL = "Package Name";
  public static TIME_PEROIOD_LABEL = "Time Period";
  public static TOTAL_AMOUNT_LABEL = "Total Amount";
  public static AMOUNT_SAVED_LABEL = "Amount Saved";
  public static ADD_PACKAGE_LABEL = "Do you really want to save package ?";

  public static CLIENT_NAME_LABEL = "Client Name";
  public static EMAIL_ADDRESS_LABEL = "Email Address";
  public static CONTACT_NUMBER_LABEL = "Contact Number";
  public static SUBSCRIPTION_LABEL = "No of Subscription";
  public static ADD_CLIENT_LABEL = "Do you really want to save client ?";

  public static ROLE_NAME_LABEL = "Role Name";
  public static NO_OF_MEMBER_LABEL = "Members";
  public static UPDATED_BY_LABEL = "Updated By";
  public static UPDATED_ON_LABEL = "Updated On";
  public static STATUS_LABEL = "Status";

  public static REQUESTER_NAME_LABEL ="Requester Name";
  public static ID_LABEL ="ID";
  public static ACTIVITY_NAME="Activity Name";
  public static TASK_NAME ="Task Name";
  public static TASK_DATE = "Task Date"
  public static ACTION_LABEL = "Status";
  public static REQUEST_DATE = "Request Date"
  public static ITEM_NAME = "Item Name"
  public static APPROVED_BY = "Approved By"


  public static USER_NAME_LABEL = "User Name";
  public static NSID_LABEL = "NSID";
  public static DESIGNATION_LABEL = "Designation";
  public static DEPARTMENT_LABEL = "Department";
  public static LOCATION_LABEL = "Location";

  public static DUPLICATE_SUBSCRIPTION_LABEL = "Duplicate subscription cannot be added!! ";
  public static ADD_SUBSCRIPTION_MSG = "Do you really want to save subscription ?";

  public static ROLE_LABEL = "Roles";
  public static USER_LABEL = "User";
  public static ACT_DACT_USER_MSG = "Do you really want to activate/ deactivate User ?";
  public static ADD_USER_LABEL = "Do you really want to save user ?";

  public static ROLE_TITLE_LABEL = "Role Title";
  public static ROLE_DESCRIPTION_LABEL = "Role Description"
  public static ACT_DACT_ROLE_MSG = "'Do you really want to activate/ deactivate role ?"

  public static CHOOSE_PERMISSION_LABEL = "Choose Permission";
  public static PERMISSION_REQ_MSG = "All Permissions are required!!";
  public static ADD_ROLE_LABEL = "Do you really want to Save Role ?";
  public static _slash = " / ";
  public static CONFIRM_MSG = "Please confirm..";
  public static MODIFY_PERMISSION_MSG = "Do you really want to modify permission ?";
  public static ROLE_PERMISSION_NOT_EXIST_ON_GIVEN_ID = "Role and Permission is not exist on given id !! ";
  public static DATA_NOT_UPDATED = "Data not Updated";


  public static ADD_CANCEL_LABEL = "Are you sure you want to cancel this operation? ";
  public static ADD_ROLE_MSG ="Do you want to save this information ?"
  public static ROLE_SAVED_MSG ="Record has been added successfully !!"
  public static ROLE_NOT_SAVED_MSG ="Your role is not saved !!"
  public static ADD_REWARD_MSG ="Do you want to redeem this reward ?"
  public static REWARD_SAVED_MSG ="Record has been added successfully !!"
  public static REWARD_NOT_SAVED_MSG ="Your reward is not saved !!"
  public static ADD_ACTIVITY_MSG ="Do you want to save this information ?"
  public static ACTIVITY_SAVED_MSG =" Record has been added successfully !!"
  public static ACTIVITY_NOT_SAVED_MSG ="Your activity is not saved !!"
  public static ADD_TASK_MSG ="Do you want to save this information ?"
  public static TASK_SAVED_MSG ="Record has been added successfully !!"
  public static TASK_NOT_SAVED_MSG ="Your task is not saved !!"
  public static RAISE_REQUEST_MSG ="Do you want to raise request as per the following information ?"
  public static RAISE_REQUEST_APPROVAL ="Are you sure you want to approve this request?"
  public static RAISE_REQUEST_REJECT ="Are you sure you want to reject this request?"
  public static RAISE_REQUEST_SAVED_MSG ="Request raised successfully !!"
  public static RAISE_REQUEST_NOT_SAVED_MSG ="Your request is not saved !!"


  public static _EDIT = "EDIT";
  public static _VIEW = "VIEW";
  public static _RESTRICTED = "RESTRICTED";
  public static _1: "1";
  public static _2: "2";
  public static _3: "3";


}
