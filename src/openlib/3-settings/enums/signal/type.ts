export enum SignalType {

    SNAPSHOT = 'SNAPSHOT',

    SIGNUP = 'SIGNUP',
    SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
    SIGNUP_FAIL = 'SIGNUP_FAIL',

    SIGNIN = 'SIGNIN',
    SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
    SIGNIN_FAIL = 'SIGNIN_FAIL',

    ACTIVATE = 'ACTIVATE',
    ACTIVATION_SUCCESS = 'ACTIVATION_SUCCESS',
    ACTIVATION_FAIL = 'ACTIVATION_FAIL',

    RECOVERY = 'RECOVERY',
    RECOVERY_TOKEN_SENT = 'RECOVERY_TOKEN_SENT',
    RECOVERY_FAIL = 'RECOVERY_FAIL',

    RECEIVE_OBJECTS = 'RECEIVE_OBJECTS',

    ACCESS_DENIED = 'ACCESS_DENIED',

    NEW_SHIP = 'NEW_SHIP',

    OBJECTS = 'OBJECTS',
    PROFILE = 'PROFILE',

    RECEIVE_PROFILE = 'RECEIVE_PROFILE',
    RECEIVE_PROFILE_FAILED = 'RECEIVE_PROFILE_FAILED',

    UPDATE = 'UPDATE',

    GALAXY = 'GALAXY',
    SECTOR = 'SECTOR',

    TEST = 'TEST',
    TEST2 = 'TEST2',
    INITIALIZE = 'INITIALIZE',
    INITIALIZED = 'INITIALIZED',
    CLUSTER = 'CLUSTER',
    TRACE = 'TRACE',
    TRACERT = 'TRACERT',
    MEMBERS = 'MEMBERS',
    INSPACE = 'INSPACE',
    CHECKIN = 'CHECKIN',
    CHECKOUT = 'CHECKOUT',

    ESCAPE = 'ESCAPE',
    ESCAPE_SUCCESS= 'ESCAPE_SUCCESS',
    ESCAPE_FAIL = 'ESCAPE_FAIL',

    LANDING = 'LANDING',
    LANDING_SUCCESS = 'LANDING_SUCCESS',
    LANDING_FAIL = 'LANDING_FAIL',

    RADAR = 'RADAR',
    RADAR_FAIL = 'RADAR_FAIL',
    RADAR_SUCCESS = 'RADAR_SUCCESS',

    MOVE = 'MOVE',
    MOVE_SUCCESS = 'MOVE_SUCCESS',
    MOVE_FAIL = 'MOVE_FAIL',

    EXPLORE = 'EXPLORE',
    EXPLORE_SUCCESS = 'EXPLORE_SUCCESS',
    EXPLORE_FAIL = 'EXPLORE_FAIL',

    WARP = 'WARP',
    WARP_SUCCESS = 'WARP_SUCCESS',
    WARP_FAIL = 'WARP_FAIL',
    WARP_SHIP = 'WARP_SHIP',
    WARP_INIT = 'WARP_INIT',

    DROP = 'DROP',
    DROP_SUCCESS = 'DROP_SUCCESS',
    DROP_FAIL = 'DROP_FAIL',

    EQUIP = 'EQUIP',
    EQUIP_SUCCESS = 'EQUIP_SUCCESS',
    EQUIP_FAIL = 'EQUIP_FAIL',

    UNEQUIP = 'UNEQUIP',
    UNEQUIP_SUCCESS = 'UNEQUIP_SUCCESS',
    UNEQUIP_FAIL = 'UNEQUIP_FAIL',

    GRAB = 'GRAB',
    GRAB_SUCCESS = 'GRAB_SUCCESS',
    GRAB_FAIL = 'GRAB_FAIL',

    ATTACK = 'ATTACK',
    ATTACK_SUCCESS = 'ATTACK_SUCCESS',
    ATTACK_FAIL = 'ATTACK_FAIL',

    SERVER_FULL_UPDATE = 'SERVER_FULL_UPDATE',
    SERVER_CONNECT = 'SERVER_CONNECT',

    SELECT = 'SELECT',
    SELECT_SUCCESS = 'SELECT_SUCCESS',
    SELECT_FAIL = 'SELECT_FAIL',

    ACTIVATION_SHIP = 'ACTIVATION_SHIP',
    UPDATE_PROFILE_FAILED = 'UPDATE_PROFILE_FAILED',
    UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS',

    RECEIVE_OBJECTS_FAIL = 'RECEIVE_OBJECTS_FAIL',

    SHIP_INJECTED = 'SHIP_INJECTED',

    ALLOCATE = 'ALLOCATE',
    ALLOCATE_INSTANCE = 'ALLOCATE_INSTANCE',
    ALLOCATED = 'ALLOCATED',
    DEALLOCATE = 'DEALLOCATE',

    SEARCH = 'SEARCH',
    RECEIVE_SEARCH = 'RECEIVE_SEARCH',

    OPEN = 'OPEN',
    OPEN_FAIL = 'OPEN_FAIL',
    OPEN_SUCCESS = 'OPEN_SUCCESS',

    CLOSE = 'CLOSE',
    CLOSE_FAIL = 'CLOSE_FAIL',
    CLOSE_SUCCESS = 'CLOSE_SUCCESS',

    MAKE = 'MAKE',
    MAKE_FAIL = 'MAKE_FAIL',
    MAKE_SUCCESS = 'MAKE_SUCCESS',

    ACCEPT = 'ACCEPT',
    ACCEPT_SUCCESS = 'ACCEPT_SUCCESS',
    ACCEPT_FAIL = 'ACCEPT_FAIL',

    FUEL = 'FUEL',
    FUEL_SUCCESS = 'FUEL_SUCCESS',
    FUEL_FAIL = 'FUEL_FAIL',

    REPAIR = 'REPAIR',
    REPAIR_SUCCESS = 'REPAIR_SUCCESS',
    REPAIR_FAIL = 'REPAIR_FAIL',

    TRANSFER = 'TRANSFER',
    TRANSFER_SUCCESS = 'TRANSFER_SUCCESS',
    TRANSFER_FAIL = 'TRANSFER_FAIL',

    APPLY = 'APPLY',
    APPLY_SUCCESS = 'APPLY_SUCCESS',
    APPLY_FAIL = 'APPLY_FAIL',

    UNSELECT = 'UNSELECT',
    UNSELECT_SUCCESS = 'UNSELECT_SUCCESS',
    UNSELECT_FAIL = 'UNSELECT_FAIL',

    BIDS = 'BIDS',
    BALANCE = 'BALANCE',
    HISTORY = 'HISTORY',
    DEPOSIT = 'DEPOSIT',

    WITHDRAW = 'WITHDRAW',
    WITHDRAW_SUCCESS = 'WITHDRAW_SUCCESS',
    WITHDRAW_FAIL = 'WITHDRAW_FAIL',

    EXCHANGE = 'EXCHANGE',
    EXCHANGE_SUCCESS = 'EXCHANGE_SUCCESS',
    EXCHANGE_FAIL = 'EXCHANGE_FAIL',

    EXCHANGE_CANCEL = 'EXCHANGE_CANCEL',
    EXCHANGE_CANCELED = 'EXCHANGE_CANCELED',
    EXCHANGE_NOT_CANCELED = 'EXCHANGE_NOT_CANCELED',

    APPLY_REVERSE = 'APPLY_REVERSE',

    ASSEMBLY = 'ASSEMBLY',
    ASSEMBLY_SUCCESS = 'ASSEMBLY_SUCCESS',
    ASSEMBLY_FAIL = 'ASSEMBLY_FAIL',

    UPLOAD = 'UPLOAD',
    UPLOAD_SUCCESS = 'UPLOAD_SUCCESS',
    UPLOAD_FAIL = 'UPLOAD_FAIL',

    CUSTOMER = 'CUSTOMER',
    PERSON = 'PERSON',

    WORKER_EXIT = 'WORKER_EXIT',

    RESEND = 'RESEND',
    RESEND_SUCCESS = 'RESEND_SUCCESS',
    RESEND_FAIL = 'RESEND_FAIL',

    SCAN = 'SCAN',
    SCAN_SUCCESS = 'SCAN_SUCCESS',
    SCAN_FAIL = 'SCAN_FAIL',

    TERMINATE = 'TERMINATE',

    UNLOCK = 'UNLOCK',
    UNLOCK_SUCCESS = 'UNLOCK_SUCCESS',
    UNLOCK_FAIL = 'UNLOCK_FAIL',

    DEPOSIT_INFO = 'DEPOSIT_INFO',
    DEPOSIT_INFO_SUCCESS = 'DEPOSIT_INFO_SUCCESS',
    DEPOSIT_INFO_FAIL = 'DEPOSIT_INFO_FAIL',

    CHARGE = 'CHARGE',

    RANKINGS = 'RANKINGS',
    RECEIVE_RANKINGS = 'RECEIVE_RANKINGS',

    ONLINE = 'ONLINE',

    BONUS = 'BONUS',
    BONUS_SUCCESS = 'BONUS_SUCCESS',
    BONUS_FAIL = 'BONUS_FAIL',

    PROFIT = 'PROFIT',
    CHARGE_FAIL = 'CHARGE_FAIL',

    CHANGE_STRATEGY = 'CHANGE_STRATEGY',
    TOKEN_EXPIRED = 'TOKEN_EXPIRED',
    SOCKET_CLOSED = 'SOCKET_CLOSED',
    INVALID_TOKEN = 'INVALID_TOKEN',

    STARMAP = 'STARMAP',
    DETAILS = 'DETAILS',
    GET_ACTIVE_USERS = 'GET_ACTIVE_USERS',
    GET_TOP5 = 'GET_TOP5',
    STATISTICS = 'STATISTICS',

    SCORES = 'SCORES',
    BALANCES = 'BALANCES',
    SEND_ANNOUNCEMENT = 'SEND_ANNOUNCEMENT',
    SEND_START = 'SEND_START',
    SEND_DISTRIBUTION = 'SEND_DISTRIBUTION',
    PROMOTION = 'PROMOTION',

    FEED = 'FEED',
    WITHDRAWL = 'WITHDRAWL',
    CONFIRM = 'CONFIRM',
    CLEAR_EXCHANGES = 'CLEAR_EXCHANGES',
    DISTRIBUTE = 'DISTRIBUTE',
    FINISH = 'FINISH',

    INJECT = 'INJECT',
    ACTION = 'ACTION',
    LEADS = 'LEADS',
    PROCESS = 'PROCESS',
    CREATE = 'CREATE',

    ACCESS = 'ACCESS',
    GET_BY_ID = 'GET_BY_ID',
    GET_LAST_ID = 'GET_LAST_ID',

    BUILD = 'BUILD',
    INJECT_FAIL = 'INJECT_FAIL',
    ECHO = 'ECHO',

    GET_ACTIVE_KEY = 'GET_ACTIVE_KEY',
    UPDATE_STAGE = 'UPDATE_STAGE',
    UPDATE_STAGE_FAILED = 'UPDATE_STAGE_FAILED',
    CALCULATE = 'CALCULATE',
    FINALIZE = 'FINALIZE',
    FINALIZE_FAIL = 'FINALIZE_FAIL',
    UPDATE_SCORES = 'UPDATE_SCORES',
    RENEW_USERS = 'RENEW_USERS',
    NEW_SHIP_FAILED = 'NEW_SHIP_FAILED',
    MAIL_DEPOSIT = 'MAIL_DEPOSIT',
    MAIL_WITHDRAW = 'MAIL_WITHDRAW',
    MAIL_EXCHANGE = 'MAIL_EXCHANGE',
    MAIL_BRIDGE = 'MAIL_BRIDGE',

    CHEAT = 'CHEAT',
    CHEAT_FAIL = 'CHEAT_FAIL',
    SKILLS = 'SKILLS',
    LOCATION = 'LOCATION',

    UNEXPECTED_ERROR = 'UNEXPECTED_ERROR',
    JUMP = 'JUMP',
    LEARN = 'LEARN',
    LEARN_FAIL = 'LEARN_FAIL',
    SKILL = 'SKILL',
    SKILL_FAIL = 'SKILL_FAIL',
    OVERVIEW = 'OVERVIEW',
    OVERVIEW_FAIL = 'OVERVIEW_FAIL',
    ANSWER = 'ANSWER',
    ANSWER_FAIL = 'ANSWER_FAIL',
    ENSURANCE = 'ENSURANCE',

    SLOTS = 'SLOTS',
    OPEN_PORTAL = 'OPEN_PORTAL',
    CLOSE_PORTAL = 'CLOSE_PORTAL',
    JOIN_GROUP = 'JOIN_GROUP',
    LEAVE_GROUP = 'LEAVE_GROUP',

    DISCONNECT = 'DISCONNECT',
    ERROR = 'ERROR',

    SWITCH_STRATEGY = 'SWITCH_STRATEGY'
}
