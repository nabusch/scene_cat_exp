/********************* 
 * V_1_Memo_End *
 *********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'V_1_memo_end';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'Alter': '',
    'Geschlecht': '',
    'Haendigkeit': '',
};

// Start code blocks for 'Before Experiment'
time = 1 + Math.random();

// Run 'Before Experiment' code from random_isi_code_memo_training
time = 1 + Math.random();

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
flowScheduler.add(data_safetyRoutineBegin());
flowScheduler.add(data_safetyRoutineEachFrame());
flowScheduler.add(data_safetyRoutineEnd());
flowScheduler.add(data_safety_2RoutineBegin());
flowScheduler.add(data_safety_2RoutineEachFrame());
flowScheduler.add(data_safety_2RoutineEnd());
flowScheduler.add(instructions_catRoutineBegin());
flowScheduler.add(instructions_catRoutineEachFrame());
flowScheduler.add(instructions_catRoutineEnd());
flowScheduler.add(category_test_textRoutineBegin());
flowScheduler.add(category_test_textRoutineEachFrame());
flowScheduler.add(category_test_textRoutineEnd());
const cat_training_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(cat_training_trialsLoopBegin(cat_training_trialsLoopScheduler));
flowScheduler.add(cat_training_trialsLoopScheduler);
flowScheduler.add(cat_training_trialsLoopEnd);




flowScheduler.add(start_categorizationRoutineBegin());
flowScheduler.add(start_categorizationRoutineEachFrame());
flowScheduler.add(start_categorizationRoutineEnd());
const categorization_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(categorization_trialsLoopBegin(categorization_trialsLoopScheduler));
flowScheduler.add(categorization_trialsLoopScheduler);
flowScheduler.add(categorization_trialsLoopEnd);































flowScheduler.add(middle_breakRoutineBegin());
flowScheduler.add(middle_breakRoutineEachFrame());
flowScheduler.add(middle_breakRoutineEnd());
flowScheduler.add(instruction_memoRoutineBegin());
flowScheduler.add(instruction_memoRoutineEachFrame());
flowScheduler.add(instruction_memoRoutineEnd());
const memo_training_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(memo_training_trialsLoopBegin(memo_training_trialsLoopScheduler));
flowScheduler.add(memo_training_trialsLoopScheduler);
flowScheduler.add(memo_training_trialsLoopEnd);




flowScheduler.add(start_memotestRoutineBegin());
flowScheduler.add(start_memotestRoutineEachFrame());
flowScheduler.add(start_memotestRoutineEnd());
const memotest_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(memotest_trialsLoopBegin(memotest_trialsLoopScheduler));
flowScheduler.add(memotest_trialsLoopScheduler);
flowScheduler.add(memotest_trialsLoopEnd);



flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions_cat_training.xlsx', 'path': 'conditions_cat_training.xlsx'},
    {'name': 'conditions_memo_training.xlsx', 'path': 'conditions_memo_training.xlsx'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introClock;
var intro_text;
var intro_resp;
var participant;
var conditions_kitchen_a;
var conditions_kitchen_b;
var conditions_living_a;
var conditions_living_b;
var conditions_sleep_a;
var conditions_sleep_b;
var conditions_memo_test;
var conditions_block_order;
var consentClock;
var consent_text;
var resources_consent;
var consent_text_2;
var consent_resp;
var data_safetyClock;
var data_safety_text;
var resources_data_safety;
var data_safety_text_2;
var data_safety_resp;
var data_safety_2Clock;
var data_safety_2_text;
var resources_data_safety_2;
var data_safety_2_text_2;
var data_safety_2_resp;
var instructions_catClock;
var instructions_cat_text;
var resources_instructions_cat;
var instructions_cat_text_2;
var instructions_cat_resp;
var category_test_textClock;
var category_test_word;
var fix_categorization_trainingClock;
var fix_cat_training_question;
var fix_cat_training_yes;
var fix_cat_training_no;
var fix_cat_training_pic;
var categorization_trainingClock;
var cat_training_fix;
var cat_training_stim;
var cat_training_key;
var cat_training_question;
var cat_training_yes;
var cat_training_no;
var cat_training_feedbackClock;
var cat_train_feedback_text;
var cat_train_feedb_yes;
var cat_train_feedb_no;
var cat_train_feedb_question;
var start_categorizationClock;
var start_cat_text;
var start_cat_resp;
var kitchen_aClock;
var kitchen_a_text;
var kitchen_a_text_2;
var kitchen_a_resp;
var kitchen_a_block_no;
var kitchen_random_isiClock;
var random_isi_kitchen_fix;
var random_isi_kitchen_yes;
var random_isi_kitchen_no;
var random_isi_kitchen_question;
var kitchen_pictureClock;
var kitchen_fix;
var kitchen_image;
var kitchen_picture_yes;
var kitchen_picture_no;
var kitchen_picture_question;
var kitchen_picture_resp;
var kitchen_bClock;
var kitchen_b_text;
var kitchen_b_text_2;
var kitchen_b_resp;
var kitchen_b_block_no;
var living_aClock;
var living_a_text;
var living_a_text_2;
var living_a_resp;
var living_a_block_no;
var living_random_isiClock;
var living_random_isi_fix;
var living_random_isi_yes;
var living_random_isi_no;
var living_random_isi_question;
var living_pictureClock;
var living_picture_fix;
var living_picture_image;
var living_picture_yes;
var living_picture_no;
var living_picture_resp;
var living_picture_question;
var living_bClock;
var living_b_text;
var living_b_text_2;
var living_b_resp;
var living_b_block_no;
var sleep_aClock;
var bed_a_text;
var bed_a_text_2;
var bed_a_resp;
var bed_a_block_no;
var sleep_random_isiClock;
var bed_random_isi_fix;
var bed_random_isi_yes;
var bed_random_isi_no;
var bed_random_isi_question;
var sleep_pictureClock;
var bed_picture_fix;
var bed_picture_image;
var bed_picture_yes;
var bed_picture_no;
var bed_picture_resp;
var bed_picture_question;
var sleep_bClock;
var bed_b_text;
var bed_b_text_2;
var bed_b_resp;
var bed_b_block_no;
var middle_breakClock;
var break_text;
var break_resp;
var instruction_memoClock;
var instructions_memo_text;
var instructions_memo_resp;
var memo_fix_isiClock;
var memo_fix_pic;
var memo_trainingClock;
var memo_training_fix;
var memo_training_stim;
var memo_training_slider;
var memo_training_feedbackClock;
var memo_train_feedb_text;
var start_memotestClock;
var start_memotest_text;
var start_memotest_resp;
var memotest_taskClock;
var memotest_task_stim;
var memotest_task_slider;
var endClock;
var end_text;
var end_resp;
var vp_code_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text',
    text: 'Herzlich Willkommen zum Experiment\n\nDas Experiment besteht aus zwei Teilen und wird ca. 30 min in Anspruch nehmen.\nBitte begeben Sie sich für die Zeit des Experiments in eine Aufrechte Position.\n\nZunächst folgt eine Einverständniserklärung, sowie die Datenschutzerklärung.\n\nWeiter mit der LEERTASTE.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  intro_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from conditions_files_code
  participant = expInfo["participant"];
  if ((Number.parseInt(participant) <= 30)) {
      conditions_kitchen_a = (participant + "_scenecat_categorize_kitchen_1.xlsx");
      conditions_kitchen_b = (participant + "_scenecat_categorize_kitchen_2.xlsx");
      conditions_living_a = (participant + "_scenecat_categorize_living_room_1.xlsx");
      conditions_living_b = (participant + "_scenecat_categorize_living_room_2.xlsx");
      conditions_sleep_a = (participant + "_scenecat_categorize_bedroom_1.xlsx");
      conditions_sleep_b = (participant + "_scenecat_categorize_bedroom_2.xlsx");
      conditions_memo_test = (participant + "_scenecat_memory.xlsx");
      conditions_block_order = (participant + "_scenecat_block_order.xlsx");
  } else {
      participant = (Number.parseInt(participant) - 30).toString();
      conditions_kitchen_a = (participant + "_scenecat_categorize_kitchen_1.xlsx");
      conditions_kitchen_b = (participant + "_scenecat_categorize_kitchen_2.xlsx");
      conditions_living_a = (participant + "_scenecat_categorize_living_room_1.xlsx");
      conditions_living_b = (participant + "_scenecat_categorize_living_room_2.xlsx");
      conditions_sleep_a = (participant + "_scenecat_categorize_bedroom_1.xlsx");
      conditions_sleep_b = (participant + "_scenecat_categorize_bedroom_2.xlsx");
      conditions_memo_test = (participant + "_scenecat_memory.xlsx");
      conditions_block_order = (participant + "_scenecat_block_order.xlsx");
  }
  
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  consent_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_text',
    text: "Einverständniserklärung\nVielen Dank für Ihre Teilnahme an unserer Studie zum Bilderverständnis!\n\nIhre Teilnahme an dieser Untersuchung ist freiwillig. Es steht Ihnen zu jedem Zeitpunkt dieser Studie frei, Ihre Teilnahme abzubrechen, ohne dass Ihnen daraus Nachteile entstehen. \n\nDatenschutz: Ihre Angaben sind selbstverständlich vertraulich und werden nur in vollständig anonymisierter Form, d.h. ohne Bezug auf Ihren Namen oder andere persönliche Daten gespeichert und ausgewertet. Weitere Informationen finden Sie in der Datenschutzerklärung.\n\nFragen: Falls Sie noch Fragen zu dieser Studie haben sollten, können Sie sich jederzeit an die Studienleiterin  oder an Prof. Niko Busch (niko.busch@uni-muenster) wenden.\n\n\nIch bestätige, dass ich mindestens 18 Jahre alt bin, diese Einverständniserklärung gelesen und verstanden habe und an der Studie teilnehmen möchte. Die Datenschutzerklärung habe ich zur Kenntnis genommen und willige freiwillig in die dort dargestellte Erhebung und weitere Verarbeitung meiner personenbezogenen Daten ein. Ich bin über mein Recht informiert worden, meine Einwilligung jederzeit ohne Angabe von Gründen widerrufen zu können.\n\n\nGleich geht's weiter...",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resources_consent = {
    status: PsychoJS.Status.NOT_STARTED
  };
  consent_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_text_2',
    text: 'Einverständniserklärung\nVielen Dank für Ihre Teilnahme an unserer Studie zum Bilderverständnis!\n\nIhre Teilnahme an dieser Untersuchung ist freiwillig. Es steht Ihnen zu jedem Zeitpunkt dieser Studie frei, Ihre Teilnahme abzubrechen, ohne dass Ihnen daraus Nachteile entstehen. \n\nDatenschutz: Ihre Angaben sind selbstverständlich vertraulich und werden nur in vollständig anonymisierter Form, d.h. ohne Bezug auf Ihren Namen oder andere persönliche Daten gespeichert und ausgewertet. Weitere Informationen finden Sie in der Datenschutzerklärung.\n\nFragen: Falls Sie noch Fragen zu dieser Studie haben sollten, können Sie sich jederzeit an die Studienleiterin  oder an Prof. Niko Busch (niko.busch@uni-muenster) wenden.\n\n\nIch bestätige, dass ich mindestens 18 Jahre alt bin, diese Einverständniserklärung gelesen und verstanden habe und an der Studie teilnehmen möchte. Die Datenschutzerklärung habe ich zur Kenntnis genommen und willige freiwillig in die dort dargestellte Erhebung und weitere Verarbeitung meiner personenbezogenen Daten ein. Ich bin über mein Recht informiert worden, meine Einwilligung jederzeit ohne Angabe von Gründen widerrufen zu können.\n\nDrücken Sie die LEERTASTE, um die Teilnahme zu bestätigen.\nDrücken Sie ESC, um das Experiment abzubrechen.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  consent_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "data_safety"
  data_safetyClock = new util.Clock();
  data_safety_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'data_safety_text',
    text: 'Datenschutzerklärung\n1. Umfang der Datenerhebung und -verarbeitung: Im Zuge der Studie werden Ihre demographischen Daten (Alter, Geschlecht, Händigkeit) sowie Reaktionszeiten und Korrektheit Ihrer Antworten während des Experiments erhoben. Die im Rahmen dieser Studie erhobenen Daten und persönlichen Mitteilungen werden vertraulich behandelt. Diejenigen Mitarbeiter, die durch direkten Kontakt mit Ihnen über personenbezogene Daten verfügen, unterliegen der Schweigepflicht.  Die Erhebung der Daten erfolgt vollständig anonymisiert, d. h.  an keiner Stelle wird Ihr Name erfragt. Die anonymisierten Daten werden mindestens 10 Jahre gespeichert. Dazu werden Ihre Daten am Ende der Sitzung ohne Angabe Ihres Namens abgespeichert, d.h. in anonymisierter Form. Ab diesem Zeitpunkt können ihre Daten nicht mehr mit ihrer Person in Verbindung gebracht werden, d.h. eine Identifizierung Ihrer Daten ist dann nicht mehr möglich. Deshalb können wir Ihrem Verlangen nach Löschung Ihrer Daten nur so lange nachkommen, bis diese in anonymisierter Form abgespeichert worden sind. Die Ergebnisse und Daten dieser Studie werden als wissenschaftliche Publikation veröffentlicht. Dies geschieht in anonymisierter Form, d.h. ohne dass die Daten einer spezifischen Person zugeordnet werden. Die vollständig anonymisierten Daten dieser Studie werden als offene Daten in einem sicheren, internetbasierten Datenarchiv (z.B. OSF, ZPID, GESIS etc.) zugänglich gemacht. Damit folgt diese Studie den Empfehlungen der Deutschen Forschungsgemeinschaft (DFG) und der Deutschen Gesellschaft für Psychologie (DGPs) zur Qualitätssicherung in der Forschung.\n2. Rechtsgrundlage: Die Rechtsgrundlage zur Verarbeitung der genannten personenbezogenen Daten bildet die Einwilligung gemäß Art. 6 (1) Buchstabe a EU-DSGVO.\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resources_data_safety = {
    status: PsychoJS.Status.NOT_STARTED
  };
  data_safety_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'data_safety_text_2',
    text: 'Datenschutzerklärung\n1. Umfang der Datenerhebung und -verarbeitung: Im Zuge der Studie werden Ihre demographischen Daten (Alter, Geschlecht, Händigkeit) sowie Reaktionszeiten und Korrektheit Ihrer Antworten während des Experiments erhoben. Die im Rahmen dieser Studie erhobenen Daten und persönlichen Mitteilungen werden vertraulich behandelt. Diejenigen Mitarbeiter, die durch direkten Kontakt mit Ihnen über personenbezogene Daten verfügen, unterliegen der Schweigepflicht.  Die Erhebung der Daten erfolgt vollständig anonymisiert, d. h.  an keiner Stelle wird Ihr Name erfragt. Die anonymisierten Daten werden mindestens 10 Jahre gespeichert. Dazu werden Ihre Daten am Ende der Sitzung ohne Angabe Ihres Namens abgespeichert, d.h. in anonymisierter Form. Ab diesem Zeitpunkt können ihre Daten nicht mehr mit ihrer Person in Verbindung gebracht werden, d.h. eine Identifizierung Ihrer Daten ist dann nicht mehr möglich. Deshalb können wir Ihrem Verlangen nach Löschung Ihrer Daten nur so lange nachkommen, bis diese in anonymisierter Form abgespeichert worden sind. Die Ergebnisse und Daten dieser Studie werden als wissenschaftliche Publikation veröffentlicht. Dies geschieht in anonymisierter Form, d.h. ohne dass die Daten einer spezifischen Person zugeordnet werden. Die vollständig anonymisierten Daten dieser Studie werden als offene Daten in einem sicheren, internetbasierten Datenarchiv (z.B. OSF, ZPID, GESIS etc.) zugänglich gemacht. Damit folgt diese Studie den Empfehlungen der Deutschen Forschungsgemeinschaft (DFG) und der Deutschen Gesellschaft für Psychologie (DGPs) zur Qualitätssicherung in der Forschung.\n2. Rechtsgrundlage: Die Rechtsgrundlage zur Verarbeitung der genannten personenbezogenen Daten bildet die Einwilligung gemäß Art. 6 (1) Buchstabe a EU-DSGVO.\n\nWeiter mit der LEERTASTE.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  data_safety_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "data_safety_2"
  data_safety_2Clock = new util.Clock();
  data_safety_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'data_safety_2_text',
    text: '3. Widerruf: Sie haben das Recht, jederzeit die datenschutzrechtliche Einwilligung zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt. (Widerruf mit Wirkung für die Zukunft). Richten Sie den Widerruf an den Verantwortlichen. Ihnen entstehen durch den Widerruf keine Nachteile.\n4. Namen und Anschrift des Verantwortlichen: Der Verantwortliche im Sinne der EU-Datenschutzgrundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist die Universität Münster, vertreten durch den Rektor, Prof. Dr. Johannes Wessels, Schlossplatz 2, 48149 Münster, Tel.: + 49 251 83-0, E-Mail: verwaltung@uni-muenster.de. Bei inhaltlichen Rückfragen zum Projekt wenden Sie sich bitte direkt an den fachlichen Ansprechpartner: Prof. Niko Busch, Tel.: + 49 (0) 251 83 34159, E-Mail: niko.busch@uni-muenster.de\n5. Kontaktdaten der Datenschutzbeauftragten: Die Datenschutzbeauftragte der Universität Münster ist:, Nina Meyer-Pachur, Schlossplatz 2, 48149 Münster, Tel.: + 49 251 83-22446, E-Mail: datenschutz@uni-muenster.de\n6. Hinweis auf Rechte der Betroffenen: Gemäß der Datenschutzgrundverordnung haben Sie grundsätzlich das Recht auf: Auskunft (Art 15 DSGVO) , Widerspruch (Art. 21 DSGVO), Datenübertragbarkeit (Art 20 DSGVO), Löschung (Art 17 DSGVO), Einschränkung der Verarbeitung (Art 18 DSGVO), Berichtigung (Art 16 DSGVO). Möchten Sie eines dieser Rechte in Anspruch nehmen, wenden Sie sich bitte an eine der genannten Kontaktpersonen. Weiterhin haben Sie das Recht, Beschwerde bei der Aufsichtsbehörde einzulegen: Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Helga Block, Kavalleriestraße 2-4, 40213 Düsseldorf, Telefon: 02 11/384 24-0, E-Mail: poststelle@ldi.nrw.de, Homepage: http://www.ldi.nrw.de\n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resources_data_safety_2 = {
    status: PsychoJS.Status.NOT_STARTED
  };
  data_safety_2_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'data_safety_2_text_2',
    text: '3. Widerruf: Sie haben das Recht, jederzeit die datenschutzrechtliche Einwilligung zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt. (Widerruf mit Wirkung für die Zukunft). Richten Sie den Widerruf an den Verantwortlichen. Ihnen entstehen durch den Widerruf keine Nachteile.\n4. Namen und Anschrift des Verantwortlichen: Der Verantwortliche im Sinne der EU-Datenschutzgrundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist die Universität Münster, vertreten durch den Rektor, Prof. Dr. Johannes Wessels, Schlossplatz 2, 48149 Münster, Tel.: + 49 251 83-0, E-Mail: verwaltung@uni-muenster.de. Bei inhaltlichen Rückfragen zum Projekt wenden Sie sich bitte direkt an den fachlichen Ansprechpartner: Prof. Niko Busch, Tel.: + 49 (0) 251 83 34159, E-Mail: r.michel@uni-muenster.de\n5. Kontaktdaten der Datenschutzbeauftragten: Die Datenschutzbeauftragte der Universität Münster ist:, Nina Meyer-Pachur, Schlossplatz 2, 48149 Münster, Tel.: + 49 251 83-22446, E-Mail: datenschutz@uni-muenster.de\n6. Hinweis auf Rechte der Betroffenen: Gemäß der Datenschutzgrundverordnung haben Sie grundsätzlich das Recht auf: Auskunft (Art 15 DSGVO) , Widerspruch (Art. 21 DSGVO), Datenübertragbarkeit (Art 20 DSGVO), Löschung (Art 17 DSGVO), Einschränkung der Verarbeitung (Art 18 DSGVO), Berichtigung (Art 16 DSGVO). Möchten Sie eines dieser Rechte in Anspruch nehmen, wenden Sie sich bitte an eine der genannten Kontaktpersonen. Weiterhin haben Sie das Recht, Beschwerde bei der Aufsichtsbehörde einzulegen: Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Helga Block, Kavalleriestraße 2-4, 40213 Düsseldorf, Telefon: 02 11/384 24-0, E-Mail: poststelle@ldi.nrw.de, Homepage: http://www.ldi.nrw.de\n\nDrücken Sie die LEERTASTE, um zu bestätigen und fortzufahren.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  data_safety_2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_cat"
  instructions_catClock = new util.Clock();
  instructions_cat_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_cat_text',
    text: 'Instruktion\n\nIn diesem Experiment untersuchen wir, wie Fotografien von verschiedenen Kategorien von Räumen wahrgenommen und erinnert werden.\nDas Experiment besteht aus zwei Teilen. Im ersten Teil ist die Aufgabe, die Bilder zu kategorisieren. Zu Beginn eines Blocks von Versuchsdurchgängen wird eine bestimmte Raum-Kategorie genannt (z.B. Wohnzimmer). In jedem der folgenden Versuchsdurchgänge soll dann so schnell es geht entschieden werden, ob das gezeigte Bild zu dieser Kategorie gehört.\nBitte halten sie während eines Blocks den Blick immer auf die Mitte des Bildschirms gerichtet, dort wo das kleine Fixationskreuz erscheint.\nDrücken Sie so schnell wie möglich „f“, falls das Bild zu dieser Kategorie gehört.\nDrücken Sie so schnell wie möglich „j“, falls das Bild NICHT zu dieser Kategorie gehört.\n\nBevor die Aufgabe beginnt, wird es einen Testlauf geben. In diesem wird Ihnen nach jeder Antwort eingeblendet, ob Sie korrekt oder falsch geantwortet haben. Dies dient zum besseren Verständnis der Aufgabe.\nPlatzieren Sie Ihre Finger am besten schon jetzt auf den Tasten "f" und "j".\n\nGleich geht\'s weiter...',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resources_instructions_cat = {
    status: PsychoJS.Status.NOT_STARTED
  };
  instructions_cat_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_cat_text_2',
    text: 'Instruktion\n\nIn diesem Experiment untersuchen wir, wie Fotografien von verschiedenen Kategorien von Räumen wahrgenommen und erinnert werden.\nDas Experiment besteht aus zwei Teilen. Im ersten Teil ist die Aufgabe, die Bilder zu kategorisieren. Zu Beginn eines Blocks von Versuchsdurchgängen wird eine bestimmte Raum-Kategorie genannt (z.B. Wohnzimmer). In jedem der folgenden Versuchsdurchgänge soll dann so schnell es geht entschieden werden, ob das gezeigte Bild zu dieser Kategorie gehört.\nBitte halten sie während eines Blocks den Blick immer auf die Mitte des Bildschirms gerichtet, dort wo das kleine Fixationskreuz erscheint.\nDrücken Sie so schnell wie möglich „f“, falls das Bild zu dieser Kategorie gehört.\nDrücken Sie so schnell wie möglich „j“, falls das Bild NICHT zu dieser Kategorie gehört.\n\nBevor die Aufgabe beginnt, wird es einen Testlauf geben. In diesem wird Ihnen nach jeder Antwort eingeblendet, ob Sie korrekt oder falsch geantwortet haben. Dies dient zum besseren Verständnis der Aufgabe.\nPlatzieren Sie Ihre Finger am besten schon jetzt auf den Tasten "f" und "j".\n\nDrücken Sie die LEERTASTE, um einen Testlauf zu starten.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  instructions_cat_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "category_test_text"
  category_test_textClock = new util.Clock();
  category_test_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'category_test_word',
    text: 'Bahnhof',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "fix_categorization_training"
  fix_categorization_trainingClock = new util.Clock();
  fix_cat_training_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cat_training_question',
    text: 'Ist dies ein Bahnhof?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  fix_cat_training_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cat_training_yes',
    text: 'f\n\nja',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  fix_cat_training_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cat_training_no',
    text: ' j\n\nnein',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  fix_cat_training_pic = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fix_cat_training_pic', units : undefined, 
    image : 'fixationskreuz.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "categorization_training"
  categorization_trainingClock = new util.Clock();
  cat_training_fix = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cat_training_fix', units : undefined, 
    image : 'fixationskreuz.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  cat_training_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cat_training_stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  cat_training_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  cat_training_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_training_question',
    text: 'Ist dies ein Bahnhof?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  cat_training_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_training_yes',
    text: 'f\n\nja',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  cat_training_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_training_no',
    text: ' j\n\nnein',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "cat_training_feedback"
  cat_training_feedbackClock = new util.Clock();
  cat_train_feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_train_feedback_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  cat_train_feedb_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_train_feedb_yes',
    text: 'f\n\nja',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  cat_train_feedb_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_train_feedb_no',
    text: ' j\n\nnein',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  cat_train_feedb_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_train_feedb_question',
    text: 'Ist dies ein Bahnhof?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "start_categorization"
  start_categorizationClock = new util.Clock();
  start_cat_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_cat_text',
    text: 'Der Testdurchlauf ist beendet.\n\nFür die folgende Aufgabe wird Ihnen keine Rückmeldung mehr eingeblendet, ob Sie korrekt oder falsch geantwortet haben.\n\nDrücken Sie die LEERTASTE, um das Experiment zu starten.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_cat_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "kitchen_a"
  kitchen_aClock = new util.Clock();
  kitchen_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_a_text',
    text: 'Küche',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  kitchen_a_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_a_text_2',
    text: 'Drücken Sie die LEERTASTE, um den nächsten Block zu starten. \nEs beginnt Block\n\nVon 6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  kitchen_a_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  kitchen_a_block_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_a_block_no',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "kitchen_random_isi"
  kitchen_random_isiClock = new util.Clock();
  random_isi_kitchen_fix = new visual.ImageStim({
    win : psychoJS.window,
    name : 'random_isi_kitchen_fix', units : undefined, 
    image : 'fixationskreuz.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  random_isi_kitchen_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'random_isi_kitchen_yes',
    text: 'f\n\nja',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  random_isi_kitchen_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'random_isi_kitchen_no',
    text: ' j\n\nnein',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  random_isi_kitchen_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'random_isi_kitchen_question',
    text: 'Ist dies eine Küche?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "kitchen_picture"
  kitchen_pictureClock = new util.Clock();
  kitchen_fix = new visual.ImageStim({
    win : psychoJS.window,
    name : 'kitchen_fix', units : undefined, 
    image : 'fixationskreuz.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  kitchen_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'kitchen_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  kitchen_picture_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_picture_yes',
    text: 'f\n\nja',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  kitchen_picture_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_picture_no',
    text: ' j\n\nnein',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  kitchen_picture_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_picture_question',
    text: 'Ist dies eine Küche?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  kitchen_picture_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "kitchen_b"
  kitchen_bClock = new util.Clock();
  kitchen_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_b_text',
    text: 'Küche',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  kitchen_b_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_b_text_2',
    text: 'Drücken Sie die LEERTASTE, um den nächsten Block zu starten. \nEs beginnt Block\n\nVon 6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  kitchen_b_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  kitchen_b_block_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_b_block_no',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "living_a"
  living_aClock = new util.Clock();
  living_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_a_text',
    text: 'Wohnzimmer',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  living_a_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_a_text_2',
    text: 'Drücken Sie die LEERTASTE, um den nächsten Block zu starten. \nEs beginnt Block\n\nVon 6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  living_a_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  living_a_block_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_a_block_no',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "living_random_isi"
  living_random_isiClock = new util.Clock();
  living_random_isi_fix = new visual.ImageStim({
    win : psychoJS.window,
    name : 'living_random_isi_fix', units : undefined, 
    image : 'fixationskreuz.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  living_random_isi_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_random_isi_yes',
    text: 'f\n\nja',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  living_random_isi_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_random_isi_no',
    text: ' j\n\nnein',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  living_random_isi_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_random_isi_question',
    text: 'Ist dies ein Wohnzimmer?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "living_picture"
  living_pictureClock = new util.Clock();
  living_picture_fix = new visual.ImageStim({
    win : psychoJS.window,
    name : 'living_picture_fix', units : undefined, 
    image : 'fixationskreuz.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  living_picture_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'living_picture_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  living_picture_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_picture_yes',
    text: 'f\n\nja',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  living_picture_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_picture_no',
    text: ' j\n\nnein',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  living_picture_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  living_picture_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_picture_question',
    text: 'Ist dies ein Wohnzimmer?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "living_b"
  living_bClock = new util.Clock();
  living_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_b_text',
    text: 'Wohnzimmer',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  living_b_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_b_text_2',
    text: 'Drücken Sie die LEERTASTE, um den nächsten Block zu starten. \nEs beginnt Block\n\nVon 6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  living_b_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  living_b_block_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_b_block_no',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "sleep_a"
  sleep_aClock = new util.Clock();
  bed_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_a_text',
    text: 'Schlafzimmer',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  bed_a_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_a_text_2',
    text: 'Drücken Sie die LEERTASTE, um den nächsten Block zu starten. \nEs beginnt Block\n\nVon 6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  bed_a_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  bed_a_block_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_a_block_no',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "sleep_random_isi"
  sleep_random_isiClock = new util.Clock();
  bed_random_isi_fix = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bed_random_isi_fix', units : undefined, 
    image : 'fixationskreuz.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  bed_random_isi_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_random_isi_yes',
    text: 'f\n\nja',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  bed_random_isi_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_random_isi_no',
    text: ' j\n\nnein',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  bed_random_isi_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_random_isi_question',
    text: 'Ist dies ein Schlafzimmer?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "sleep_picture"
  sleep_pictureClock = new util.Clock();
  bed_picture_fix = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bed_picture_fix', units : undefined, 
    image : 'fixationskreuz.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  bed_picture_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bed_picture_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  bed_picture_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_picture_yes',
    text: 'f\n\nja',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  bed_picture_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_picture_no',
    text: ' j\n\nnein',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  bed_picture_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  bed_picture_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_picture_question',
    text: 'Ist dies ein Schlafzimmer?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "sleep_b"
  sleep_bClock = new util.Clock();
  bed_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_b_text',
    text: 'Schlafzimmer',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  bed_b_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_b_text_2',
    text: 'Drücken Sie die LEERTASTE, um den nächsten Block zu starten. \nEs beginnt Block\n\nVon 6',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  bed_b_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  bed_b_block_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_b_block_no',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "middle_break"
  middle_breakClock = new util.Clock();
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: 'Der erste Teil des Experimentes ist beendet.\n\nDrücken Sie die LEERTASTE, um zur Instruktion des zweiten Teils zu gelangen.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  break_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_memo"
  instruction_memoClock = new util.Clock();
  instructions_memo_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_memo_text',
    text: 'Instruktion\nZweiter Teil\n\nEs werden nun wieder Bilder der drei bekannten Kategorien gezeigt. Dabei sollen Sie auf einer Skala einschätzen, ob es sich um ein altes Bild handelt, das Ihnen vorhin schon mal gezeigt wurde, oder ein komplett neues. Es geht in dieser Aufgabe NICHT mehr, darum schnellstmöglich zu antworten. Sie werden das Bild bis so lange sehen können, bis Sie antworten.\n\nDie Skala ist folgende:\nsicher alt\neher alt\neher neu\nsicher neu\n\nDie Skala wird Ihnen unter den Bildern angezeigt. Dabei sollen Sie die Kategorie auswählen, indem Sie mit der Maus darauf klicken.\n\nBevor die Aufgabe beginnt, wird es wieder einen Testlauf geben. Nach jeder Antwort wird Ihnen eingeblendet, ob Sie korrekt oder falsch geantwortet haben. Dies dient zum besseren Verständnis der Aufgabe.\n\nDrücken Sie die LEERTASTE, um einen Testdurchlauf zu starten.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instructions_memo_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "memo_fix_isi"
  memo_fix_isiClock = new util.Clock();
  memo_fix_pic = new visual.ImageStim({
    win : psychoJS.window,
    name : 'memo_fix_pic', units : undefined, 
    image : 'fixationskreuz.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "memo_training"
  memo_trainingClock = new util.Clock();
  memo_training_fix = new visual.ImageStim({
    win : psychoJS.window,
    name : 'memo_training_fix', units : undefined, 
    image : undefined, mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  memo_training_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'memo_training_stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  memo_training_slider = new visual.Slider({
    win: psychoJS.window, name: 'memo_training_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0, (- 0.35)], ori: 0.0, units: psychoJS.window.units,
    labels: ["sicher alt", "eher alt", "eher neu", "sicher neu"], fontSize: 0.04, ticks: [1, 2, 3, 4],
    granularity: 0.0, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color([1.0, 1.0, 1.0]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "memo_training_feedback"
  memo_training_feedbackClock = new util.Clock();
  memo_train_feedb_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'memo_train_feedb_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "start_memotest"
  start_memotestClock = new util.Clock();
  start_memotest_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_memotest_text',
    text: 'Der Testdurchlauf ist beendet.\n\nFür die folgende Aufgabe wird Ihnen keine Rückmeldung mehr eingeblendet, ob Sie korrekt oder falsch geantwortet haben.\n\nDrücken Sie die LEERTASTE, um zu starten.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_memotest_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "memotest_task"
  memotest_taskClock = new util.Clock();
  memotest_task_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'memotest_task_stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  memotest_task_slider = new visual.Slider({
    win: psychoJS.window, name: 'memotest_task_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0, (- 0.35)], ori: 0.0, units: psychoJS.window.units,
    labels: ["sicher alt", "eher alt", "eher neu", "sicher neu"], fontSize: 0.04, ticks: [1, 2, 3, 4],
    granularity: 0.0, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color([1.0, 1.0, 1.0]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Vielen Dank für Ihre Teilnahme!\nBitte schicken Sie den unten stehenden Code, an folgende Emailadresse, um die Versuchspersonenstunde zu erhalten:\np_torw01@uni-muenster.de\n\nWo und wie Sie die Unterschrift für Ihre VP-Stunde erhalten, wird Ihnen per Email mitgeteilt.\n\nDrücken Sie die LEERTASTE, um das Experiment zu beenden.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  vp_code_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'vp_code_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _intro_resp_allKeys;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_resp.keys = undefined;
    intro_resp.rt = undefined;
    _intro_resp_allKeys = [];
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(intro_text);
    introComponents.push(intro_resp);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text* updates
    if (t >= 0.0 && intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text.tStart = t;  // (not accounting for frame time here)
      intro_text.frameNStart = frameN;  // exact frame index
      
      intro_text.setAutoDraw(true);
    }
    
    
    // *intro_resp* updates
    if (t >= 0.0 && intro_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_resp.tStart = t;  // (not accounting for frame time here)
      intro_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { intro_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { intro_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { intro_resp.clearEvents(); });
    }
    
    if (intro_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = intro_resp.getKeys({keyList: ['space'], waitRelease: false});
      _intro_resp_allKeys = _intro_resp_allKeys.concat(theseKeys);
      if (_intro_resp_allKeys.length > 0) {
        intro_resp.keys = _intro_resp_allKeys[_intro_resp_allKeys.length - 1].name;  // just the last key pressed
        intro_resp.rt = _intro_resp_allKeys[_intro_resp_allKeys.length - 1].rt;
        intro_resp.duration = _intro_resp_allKeys[_intro_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    intro_resp.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _consent_resp_allKeys;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent' ---
    t = 0;
    consentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    consent_resp.keys = undefined;
    consent_resp.rt = undefined;
    _consent_resp_allKeys = [];
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(consent_text);
    consentComponents.push(resources_consent);
    consentComponents.push(consent_text_2);
    consentComponents.push(consent_resp);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent' ---
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_text* updates
    if (t >= 0.5 && consent_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_text.tStart = t;  // (not accounting for frame time here)
      consent_text.frameNStart = frameN;  // exact frame index
      
      consent_text.setAutoDraw(true);
    }
    
    frameRemains = 25  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((consent_text.status === PsychoJS.Status.STARTED || consent_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      consent_text.setAutoDraw(false);
    }
    // start downloading resources specified by component resources_consent
    if (t >= 0 && resources_consent.status === PsychoJS.Status.NOT_STARTED) {
      console.log('register and start downloading resources specified by component resources_consent');
      psychoJS._serverManager.prepareResources([conditions_sleep_b, conditions_sleep_a, conditions_living_b, conditions_living_a, conditions_kitchen_b, conditions_kitchen_a, conditions_memo_test, conditions_block_order, "stimuli/asdfgh.jpg", "stimuli/asdfghertghvgh.jpg", "stimuli/asdfghjkjhg.jpg", "stimuli/asdfghjkloelkjhg.jpg", "stimuli/dfghjhgf.jpg", "stimuli/erhvgh.jpg", "stimuli/erthjnbvcfg.jpg", "stimuli/fvbjgv.jpg", "stimuli/gfdfghjgf.jpg", "stimuli/gfvbnbg.jpg", "stimuli/hhhh.jpg", "stimuli/ihnbvcfgd.jpg", "stimuli/ijnbgzuik.jpg", "stimuli/img_0adz5.jpg", "stimuli/img_0bah1.jpg", "stimuli/img_0dege.jpg", "stimuli/img_0eflx.jpg", "stimuli/img_0ej0y.jpg", "stimuli/img_0ekxv.jpg", "stimuli/img_0ez70.jpg", "stimuli/img_0j24m.jpg", "stimuli/img_0jzz7.jpg", "stimuli/img_0kmfo.jpg", "stimuli/img_0kqc0.jpg", "stimuli/img_0mhms.jpg", "stimuli/img_0nckg.jpg", "stimuli/img_0noah.jpg", "stimuli/img_00ojb.jpg", "stimuli/img_0pt3z.jpg", "stimuli/img_0qndh.jpg", "stimuli/img_0rbu4.jpg", "stimuli/img_0si9u.jpg", "stimuli/img_0t206.jpg", "stimuli/img_0ugsg.jpg", "stimuli/img_0uiwg.jpg", "stimuli/img_0urnu.jpg", "stimuli/img_0wv81.jpg", "stimuli/img_0wzeq.jpg", "stimuli/img_0x4kb.jpg", "stimuli/img_0xwtf.jpg", "stimuli/img_0zzo4.jpg", "stimuli/img_1ao2d.jpg", "stimuli/img_1b74f.jpg", "stimuli/img_1ccse.jpg", "stimuli/img_1cdqc.jpg", "stimuli/img_1cm9s.jpg", "stimuli/img_1d1l9.jpg", "stimuli/img_1etij.jpg", "stimuli/img_1fjfz.jpg", "stimuli/img_1gr78.jpg", "stimuli/img_1i6q5.jpg", "stimuli/img_1iam9.jpg", "stimuli/img_1ibl4.jpg", "stimuli/img_1m0fn.jpg", "stimuli/img_1n8b9.jpg", "stimuli/img_1ojyk.jpg", "stimuli/img_1plu7.jpg", "stimuli/img_1q8pa.jpg", "stimuli/img_1qa4t.jpg", "stimuli/img_1ql54.jpg", "stimuli/img_1qye0.jpg", "stimuli/img_1r2ri.jpg", "stimuli/img_1r08n.jpg", "stimuli/img_1s8dl.jpg", "stimuli/img_1scr4.jpg", "stimuli/img_1twlp.jpg", "stimuli/img_1uwbl.jpg", "stimuli/img_1vq1v.jpg", "stimuli/img_1vukv.jpg", "stimuli/img_01w8b.jpg", "stimuli/img_1wxyo.jpg", "stimuli/img_1xdqe.jpg", "stimuli/img_1yffi.jpg", "stimuli/img_1zhz6.jpg", "stimuli/img_02alv.jpg", "stimuli/img_2b8fp.jpg", "stimuli/img_2c9w1.jpg", "stimuli/img_2cebl.jpg", "stimuli/img_002cv.jpg", "stimuli/img_2d000.jpg", "stimuli/img_2d3c2.jpg", "stimuli/img_2d82m.jpg", "stimuli/img_2dnfy.jpg", "stimuli/img_2ehfe.jpg", "stimuli/img_2fe41.jpg", "stimuli/img_2g129.jpg", "stimuli/img_2i925.jpg", "stimuli/img_2imrl.jpg", "stimuli/img_2jgpo.jpg", "stimuli/img_2js6m.jpg", "stimuli/img_2lcxi.jpg", "stimuli/img_2lqsf.jpg", "stimuli/img_2na1o.jpg", "stimuli/img_2pk6v.jpg", "stimuli/img_2pnl2.jpg", "stimuli/img_2qdvq.jpg", "stimuli/img_2qhro.jpg", "stimuli/img_2qkvm.jpg", "stimuli/img_2rtxu.jpg", "stimuli/img_2rwes.jpg", "stimuli/img_2rylq.jpg", "stimuli/img_2s780.jpg", "stimuli/img_2vqdc.jpg", "stimuli/img_2wkab.jpg", "stimuli/img_2ygqr.jpg", "stimuli/img_3a2r2.jpg", "stimuli/img_3a6lc.jpg", "stimuli/img_3ar9q.jpg", "stimuli/img_3arcv.jpg", "stimuli/img_3aueq.jpg", "stimuli/img_3bp7b.jpg", "stimuli/img_3bxjb.jpg", "stimuli/img_3cp3s.jpg", "stimuli/img_3eusg.jpg", "stimuli/img_3fldm.jpg", "stimuli/img_3gm8h.jpg", "stimuli/img_3h4c9.jpg", "stimuli/img_3hmlp.jpg", "stimuli/img_3i80k.jpg", "stimuli/img_3ialr.jpg", "stimuli/img_3jnt7.jpg", "stimuli/img_3kho5.jpg", "stimuli/img_3lli8.jpg", "stimuli/img_3lvof.jpg", "stimuli/img_3m2h0.jpg", "stimuli/img_3m61b.jpg", "stimuli/img_3miwe.jpg", "stimuli/img_3mp24.jpg", "stimuli/img_3nswx.jpg", "stimuli/img_3oyah.jpg", "stimuli/img_3p0zv.jpg", "stimuli/img_3ph9o.jpg", "stimuli/img_3q6t4.jpg", "stimuli/img_3ro4n.jpg", "stimuli/img_3s357.jpg", "stimuli/img_3shmp.jpg", "stimuli/img_3sw8t.jpg", "stimuli/img_3tnh4.jpg", "stimuli/img_3v5w3.jpg", "stimuli/img_3w4dt.jpg", "stimuli/img_3wj63.jpg", "stimuli/img_3y35o.jpg", "stimuli/img_3ze38.jpg", "stimuli/img_4bef4.jpg", "stimuli/img_4bxxj.jpg", "stimuli/img_4c48i.jpg", "stimuli/img_4d0aw.jpg", "stimuli/img_4dxo4.jpg", "stimuli/img_4g6yq.jpg", "stimuli/img_4glfv.jpg", "stimuli/img_4jra4.jpg", "stimuli/img_4k1j9.jpg", "stimuli/img_4kzor.jpg", "stimuli/img_4lyad.jpg", "stimuli/img_4m9ud.jpg", "stimuli/img_4o8l0.jpg", "stimuli/img_4p9dc.jpg", "stimuli/img_4q2n8.jpg", "stimuli/img_4s67y.jpg", "stimuli/img_4spc8.jpg", "stimuli/img_4td0x.jpg", "stimuli/img_4ufga.jpg", "stimuli/img_4utvc.jpg", "stimuli/img_4wq98.jpg", "stimuli/img_4xr0x.jpg", "stimuli/img_4xxuf.jpg", "stimuli/img_4y7mh.jpg", "stimuli/img_4yy1j.jpg", "stimuli/img_5a1ke.jpg", "stimuli/img_5alzj.jpg", "stimuli/img_05c3h.jpg", "stimuli/img_5e7iu.jpg", "stimuli/img_5ecez.jpg", "stimuli/img_5ewoj.jpg", "stimuli/img_5f8ha.jpg", "stimuli/img_5fkbp.jpg", "stimuli/img_05flq.jpg", "stimuli/img_5fr9m.jpg", "stimuli/img_5il0t.jpg", "stimuli/img_5jp4f.jpg", "stimuli/img_5jy9c.jpg", "stimuli/img_5k4cy.jpg", "stimuli/img_5m6x4.jpg", "stimuli/img_5m75u.jpg", "stimuli/img_5mw7y.jpg", "stimuli/img_5nfmx.jpg", "stimuli/img_5nlnv.jpg", "stimuli/img_5nlyi.jpg", "stimuli/img_5o1x3.jpg", "stimuli/img_5oubg.jpg", "stimuli/img_5ovr5.jpg", "stimuli/img_5p2ql.jpg", "stimuli/img_5pmhd.jpg", "stimuli/img_5qdyh.jpg", "stimuli/img_5t91y.jpg", "stimuli/img_5tr4v.jpg", "stimuli/img_5udo9.jpg", "stimuli/img_5vc3c.jpg", "stimuli/img_5w83x.jpg", "stimuli/img_5x1u3.jpg", "stimuli/img_5yhe7.jpg", "stimuli/img_5yhyk.jpg", "stimuli/img_6a0hu.jpg", "stimuli/img_6cg5g.jpg", "stimuli/img_6ddrx.jpg", "stimuli/img_6dl6t.jpg", "stimuli/img_6dvd0.jpg", "stimuli/img_6dves.jpg", "stimuli/img_6fo9f.jpg", "stimuli/img_6funa.jpg", "stimuli/img_6hyyt.jpg", "stimuli/img_6iqem.jpg", "stimuli/img_6j727.jpg", "stimuli/img_6jjvh.jpg", "stimuli/img_6jsgr.jpg", "stimuli/img_6lpz9.jpg", "stimuli/img_6mdbc.jpg", "stimuli/img_6nbgt.jpg", "stimuli/img_6p0lz.jpg", "stimuli/img_6qetq.jpg", "stimuli/img_6syr3.jpg", "stimuli/img_6tou7.jpg", "stimuli/img_6umgp.jpg", "stimuli/img_6v5oo.jpg", "stimuli/img_6vila.jpg", "stimuli/img_6vta6.jpg", "stimuli/img_6w2lk.jpg", "stimuli/img_6wne4.jpg", "stimuli/img_6wr5y.jpg", "stimuli/img_6wshc.jpg", "stimuli/img_6xg4l.jpg", "stimuli/img_6zla6.jpg", "stimuli/img_6zz63.jpg", "stimuli/img_7a0c1.jpg", "stimuli/img_7a2m9.jpg", "stimuli/img_07c1w.jpg", "stimuli/img_7caxh.jpg", "stimuli/img_7e06w.jpg", "stimuli/img_7ed9m.jpg", "stimuli/img_7f11q.jpg", "stimuli/img_7fwp2.jpg", "stimuli/img_7hti2.jpg", "stimuli/img_7i6d8.jpg", "stimuli/img_7likj.jpg", "stimuli/img_7lron.jpg", "stimuli/img_7lz7m.jpg", "stimuli/img_7m3wh.jpg", "stimuli/img_7m07e.jpg", "stimuli/img_7mqbh.jpg", "stimuli/img_7os7q.jpg", "stimuli/img_7pgd2.jpg", "stimuli/img_7q6ry.jpg", "stimuli/img_7rss9.jpg", "stimuli/img_07tdb.jpg", "stimuli/img_7ucnr.jpg", "stimuli/img_7w5tw.jpg", "stimuli/img_7wquy.jpg", "stimuli/img_7wul8.jpg", "stimuli/img_7wxuy.jpg", "stimuli/img_7xzhf.jpg", "stimuli/img_7y67w.jpg", "stimuli/img_7z2tj.jpg", "stimuli/img_8cnbp.jpg", "stimuli/img_8dacu.jpg", "stimuli/img_8df2e.jpg", "stimuli/img_08dll.jpg", "stimuli/img_8dmpq.jpg", "stimuli/img_8fpog.jpg", "stimuli/img_8i1jb.jpg", "stimuli/img_8i3q8.jpg", "stimuli/img_8jy3h.jpg", "stimuli/img_8l8qo.jpg", "stimuli/img_8mkbv.jpg", "stimuli/img_8qkmd.jpg", "stimuli/img_8qt7d.jpg", "stimuli/img_8tc8e.jpg", "stimuli/img_08tlm.jpg", "stimuli/img_8vcm6.jpg", "stimuli/img_8vygl.jpg", "stimuli/img_8wa09.jpg", "stimuli/img_8ybbp.jpg", "stimuli/img_8zf2f.jpg", "stimuli/img_09a3o.jpg", "stimuli/img_9ann0.jpg", "stimuli/img_9b6yl.jpg", "stimuli/img_9bkl9.jpg", "stimuli/img_9ck2q.jpg", "stimuli/img_9d84u.jpg", "stimuli/img_9dg1v.jpg", "stimuli/img_9g4tp.jpg", "stimuli/img_9g12g.jpg", "stimuli/img_9jgbc.jpg", "stimuli/img_09jt1.jpg", "stimuli/img_09lgm.jpg", "stimuli/img_9mcah.jpg", "stimuli/img_9mky8.jpg", "stimuli/img_9mlzp.jpg", "stimuli/img_9n6al.jpg", "stimuli/img_9nnrj.jpg", "stimuli/img_9o0wl.jpg", "stimuli/img_9oofc.jpg", "stimuli/img_9os15.jpg", "stimuli/img_9pfbj.jpg", "stimuli/img_9qg3g.jpg", "stimuli/img_9qmek.jpg", "stimuli/img_09ram.jpg", "stimuli/img_9ro1y.jpg", "stimuli/img_9stvt.jpg", "stimuli/img_9tgq9.jpg", "stimuli/img_9ugw8.jpg", "stimuli/img_9wc9w.jpg", "stimuli/img_9wgjs.jpg", "stimuli/img_9wmp8.jpg", "stimuli/img_9x6du.jpg", "stimuli/img_9z99v.jpg", "stimuli/img_10t4k.jpg", "stimuli/img_11anu.jpg", "stimuli/img_12lvj.jpg", "stimuli/img_13ozs.jpg", "stimuli/img_13ymo.jpg", "stimuli/img_14hyn.jpg", "stimuli/img_15bss.jpg", "stimuli/img_16kib.jpg", "stimuli/img_17p17.jpg", "stimuli/img_18r80.jpg", "stimuli/img_23ged.jpg", "stimuli/img_24rt2.jpg", "stimuli/img_25zj9.jpg", "stimuli/img_26n4i.jpg", "stimuli/img_28eqs.jpg", "stimuli/img_29cw5.jpg", "stimuli/img_29gyt.jpg", "stimuli/img_29td3.jpg", "stimuli/img_30vz5.jpg", "stimuli/img_33ka1.jpg", "stimuli/img_34vo5.jpg", "stimuli/img_35zbz.jpg", "stimuli/img_37hgm.jpg", "stimuli/img_37uwk.jpg", "stimuli/img_38iec.jpg", "stimuli/img_39hz5.jpg", "stimuli/img_43unx.jpg", "stimuli/img_43xbt.jpg", "stimuli/img_43xdp.jpg", "stimuli/img_46tsn.jpg", "stimuli/img_47k1j.jpg", "stimuli/img_47zvc.jpg", "stimuli/img_048l0.jpg", "stimuli/img_48r6i.jpg", "stimuli/img_49h18.jpg", "stimuli/img_52i74.jpg", "stimuli/img_53nbn.jpg", "stimuli/img_56f8c.jpg", "stimuli/img_57os5.jpg", "stimuli/img_58n4j.jpg", "stimuli/img_58ujj.jpg", "stimuli/img_60x5k.jpg", "stimuli/img_62xpv.jpg", "stimuli/img_63slq.jpg", "stimuli/img_64ite.jpg", "stimuli/img_65cdi.jpg", "stimuli/img_65zmd.jpg", "stimuli/img_66fuf.jpg", "stimuli/img_66ncr.jpg", "stimuli/img_66sfd.jpg", "stimuli/img_66zut.jpg", "stimuli/img_68aqt.jpg", "stimuli/img_68bu5.jpg", "stimuli/img_68d11.jpg", "stimuli/img_68f2l.jpg", "stimuli/img_68wfw.jpg", "stimuli/img_70ji9.jpg", "stimuli/img_70x14.jpg", "stimuli/img_71mhq.jpg", "stimuli/img_72fmj.jpg", "stimuli/img_72hmj.jpg", "stimuli/img_72hyg.jpg", "stimuli/img_72wnn.jpg", "stimuli/img_73pyk.jpg", "stimuli/img_76tei.jpg", "stimuli/img_77pme.jpg", "stimuli/img_78fxr.jpg", "stimuli/img_78p4f.jpg", "stimuli/img_78zcn.jpg", "stimuli/img_79b5l.jpg", "stimuli/img_80mdz.jpg", "stimuli/img_81nb0.jpg", "stimuli/img_82bie.jpg", "stimuli/img_84s7n.jpg", "stimuli/img_85xkk.jpg", "stimuli/img_86s60.jpg", "stimuli/img_88h71.jpg", "stimuli/img_88mrj.jpg", "stimuli/img_088sa.jpg", "stimuli/img_89dvt.jpg", "stimuli/img_89rmb.jpg", "stimuli/img_91csq.jpg", "stimuli/img_91ht8.jpg", "stimuli/img_91lbx.jpg", "stimuli/img_92eyc.jpg", "stimuli/img_92f93.jpg", "stimuli/img_93vg8.jpg", "stimuli/img_93vmh.jpg", "stimuli/img_95hiv.jpg", "stimuli/img_97f62.jpg", "stimuli/img_99exx.jpg", "stimuli/img_99qvn.jpg", "stimuli/img_165pk.jpg", "stimuli/img_190ub.jpg", "stimuli/img_196rk.jpg", "stimuli/img_287jq.jpg", "stimuli/img_301af.jpg", "stimuli/img_314bq.jpg", "stimuli/img_319z4.jpg", "stimuli/img_328s0.jpg", "stimuli/img_411xa.jpg", "stimuli/img_463mq.jpg", "stimuli/img_520au.jpg", "stimuli/img_0548r.jpg", "stimuli/img_552an.jpg", "stimuli/img_667w7.jpg", "stimuli/img_753pq.jpg", "stimuli/img_782qs.jpg", "stimuli/img_791d1.jpg", "stimuli/img_818nk.jpg", "stimuli/img_936g7.jpg", "stimuli/img_948n5.jpg", "stimuli/img_4800h.jpg", "stimuli/img_4974k.jpg", "stimuli/img_5949k.jpg", "stimuli/img_7147j.jpg", "stimuli/img_8297a.jpg", "stimuli/img_9684y.jpg", "stimuli/img_60242.jpg", "stimuli/img_93366.jpg", "stimuli/img_a1erh.jpg", "stimuli/img_a2mx2.jpg", "stimuli/img_a2pkp.jpg", "stimuli/img_a3jds.jpg", "stimuli/img_a6u3n.jpg", "stimuli/img_a7bdg.jpg", "stimuli/img_a8irr.jpg", "stimuli/img_a8wvq.jpg", "stimuli/img_a8y4y.jpg", "stimuli/img_a9acb.jpg", "stimuli/img_a9he3.jpg", "stimuli/img_a09k2.jpg", "stimuli/img_a220l.jpg", "stimuli/img_abobq.jpg", "stimuli/img_ac0ey.jpg", "stimuli/img_aellb.jpg", "stimuli/img_af3l2.jpg", "stimuli/img_afcbj.jpg", "stimuli/img_afmdp.jpg", "stimuli/img_agwon.jpg", "stimuli/img_ah5vo.jpg", "stimuli/img_aki78.jpg", "stimuli/img_allt1.jpg", "stimuli/img_amsgw.jpg", "stimuli/img_amsko.jpg", "stimuli/img_anakd.jpg", "stimuli/img_and1v.jpg", "stimuli/img_anfk9.jpg", "stimuli/img_anhzn.jpg", "stimuli/img_anjr0.jpg", "stimuli/img_anzgh.jpg", "stimuli/img_aplao.jpg", "stimuli/img_aqu2d.jpg", "stimuli/img_arx94.jpg", "stimuli/img_as3da.jpg", "stimuli/img_astid.jpg", "stimuli/img_aswbu.jpg", "stimuli/img_atzjw.jpg", "stimuli/img_aweye.jpg", "stimuli/img_awuev.jpg", "stimuli/img_ay56d.jpg", "stimuli/img_b0yct.jpg", "stimuli/img_b2jli.jpg", "stimuli/img_b2xn0.jpg", "stimuli/img_b3fi1.jpg", "stimuli/img_b7gom.jpg", "stimuli/img_b7ycd.jpg", "stimuli/img_b17ma.jpg", "stimuli/img_b21d7.jpg", "stimuli/img_b34c4.jpg", "stimuli/img_b36ne.jpg", "stimuli/img_b55q0.jpg", "stimuli/img_b89t4.jpg", "stimuli/img_b971s.jpg", "stimuli/img_ba2q4.jpg", "stimuli/img_badai.jpg", "stimuli/img_bbs77.jpg", "stimuli/img_bbt0k.jpg", "stimuli/img_bdqmg.jpg", "stimuli/img_bdz92.jpg", "stimuli/img_be0j0.jpg", "stimuli/img_bendp.jpg", "stimuli/img_bf4eh.jpg", "stimuli/img_bf8nx.jpg", "stimuli/img_bflfy.jpg", "stimuli/img_bg264.jpg", "stimuli/img_bj2gr.jpg", "stimuli/img_bj99b.jpg", "stimuli/img_bklr1.jpg", "stimuli/img_bl2f1.jpg", "stimuli/img_bnetw.jpg", "stimuli/img_bntrh.jpg", "stimuli/img_bp226.jpg", "stimuli/img_bpgb3.jpg", "stimuli/img_bpyv5.jpg", "stimuli/img_bs3m7.jpg", "stimuli/img_bsr0p.jpg", "stimuli/img_bwo9g.jpg", "stimuli/img_bwx3i.jpg", "stimuli/img_bysq2.jpg", "stimuli/img_bzuyx.jpg", "stimuli/img_c0ecw.jpg", "stimuli/img_c0kt4.jpg", "stimuli/img_c0me7.jpg", "stimuli/img_c0vzo.jpg", "stimuli/img_c2pbs.jpg", "stimuli/img_c3ipx.jpg", "stimuli/img_c3r29.jpg", "stimuli/img_c4ljf.jpg", "stimuli/img_c4uwt.jpg", "stimuli/img_c4vkt.jpg", "stimuli/img_c6tg4.jpg", "stimuli/img_c7bpx.jpg", "stimuli/img_c30d1.jpg", "stimuli/img_c79r7.jpg", "stimuli/img_c89x3.jpg", "stimuli/img_ca8kd.jpg", "stimuli/img_caqzp.jpg", "stimuli/img_ccn2w.jpg", "stimuli/img_ce9vx.jpg", "stimuli/img_ce55l.jpg", "stimuli/img_cehin.jpg", "stimuli/img_cel9k.jpg", "stimuli/img_ceqfs.jpg", "stimuli/img_cf2bd.jpg", "stimuli/img_cf9gk.jpg", "stimuli/img_cfarv.jpg", "stimuli/img_cgdyc.jpg", "stimuli/img_cht1k.jpg", "stimuli/img_ciboa.jpg", "stimuli/img_cic06.jpg", "stimuli/img_cjvod.jpg", "stimuli/img_ck3m4.jpg", "stimuli/img_clbu4.jpg", "stimuli/img_cmjji.jpg", "stimuli/img_cmyvx.jpg", "stimuli/img_cn574.jpg", "stimuli/img_cnxex.jpg", "stimuli/img_cnyac.jpg", "stimuli/img_cogrz.jpg", "stimuli/img_cpsdh.jpg", "stimuli/img_cqot9.jpg", "stimuli/img_ct6bx.jpg", "stimuli/img_ct240.jpg", "stimuli/img_cust8.jpg", "stimuli/img_cv6mf.jpg", "stimuli/img_cv9qj.jpg", "stimuli/img_cvyc3.jpg", "stimuli/img_cwokj.jpg", "stimuli/img_cxpff.jpg", "stimuli/img_cxqey.jpg", "stimuli/img_cy08j.jpg", "stimuli/img_czjk5.jpg", "stimuli/img_d0k76.jpg", "stimuli/img_d0sj6.jpg", "stimuli/img_d1e9h.jpg", "stimuli/img_d3t0o.jpg", "stimuli/img_d3wwy.jpg", "stimuli/img_d4rmg.jpg", "stimuli/img_d6jnd.jpg", "stimuli/img_d7iri.jpg", "stimuli/img_d7nng.jpg", "stimuli/img_d8xbu.jpg", "stimuli/img_d9ogj.jpg", "stimuli/img_d26ik.jpg", "stimuli/img_d55q7.jpg", "stimuli/img_d90m7.jpg", "stimuli/img_d480g.jpg", "stimuli/img_d5947.jpg", "stimuli/img_daqxs.jpg", "stimuli/img_db1ke.jpg", "stimuli/img_dbf9a.jpg", "stimuli/img_dg5h7.jpg", "stimuli/img_dh5no.jpg", "stimuli/img_dhjnr.jpg", "stimuli/img_di6f0.jpg", "stimuli/img_di9lr.jpg"]);
      resources_consent.status = PsychoJS.Status.STARTED;
    }
    
    // *consent_text_2* updates
    if (t >= 25 && consent_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_text_2.tStart = t;  // (not accounting for frame time here)
      consent_text_2.frameNStart = frameN;  // exact frame index
      
      consent_text_2.setAutoDraw(true);
    }
    
    
    // *consent_resp* updates
    if (t >= 25 && consent_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_resp.tStart = t;  // (not accounting for frame time here)
      consent_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_resp.clearEvents(); });
    }
    
    if (consent_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_resp.getKeys({keyList: ['space'], waitRelease: false});
      _consent_resp_allKeys = _consent_resp_allKeys.concat(theseKeys);
      if (_consent_resp_allKeys.length > 0) {
        consent_resp.keys = _consent_resp_allKeys[_consent_resp_allKeys.length - 1].name;  // just the last key pressed
        consent_resp.rt = _consent_resp_allKeys[_consent_resp_allKeys.length - 1].rt;
        consent_resp.duration = _consent_resp_allKeys[_consent_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent' ---
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    consent_resp.stop();
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _data_safety_resp_allKeys;
var data_safetyComponents;
function data_safetyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'data_safety' ---
    t = 0;
    data_safetyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    data_safety_resp.keys = undefined;
    data_safety_resp.rt = undefined;
    _data_safety_resp_allKeys = [];
    // keep track of which components have finished
    data_safetyComponents = [];
    data_safetyComponents.push(data_safety_text);
    data_safetyComponents.push(resources_data_safety);
    data_safetyComponents.push(data_safety_text_2);
    data_safetyComponents.push(data_safety_resp);
    
    for (const thisComponent of data_safetyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function data_safetyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'data_safety' ---
    // get current time
    t = data_safetyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *data_safety_text* updates
    if (t >= 0.5 && data_safety_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      data_safety_text.tStart = t;  // (not accounting for frame time here)
      data_safety_text.frameNStart = frameN;  // exact frame index
      
      data_safety_text.setAutoDraw(true);
    }
    
    frameRemains = 10  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((data_safety_text.status === PsychoJS.Status.STARTED || data_safety_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      data_safety_text.setAutoDraw(false);
    }
    // start downloading resources specified by component resources_data_safety
    if (t >= 0 && resources_data_safety.status === PsychoJS.Status.NOT_STARTED) {
      console.log('register and start downloading resources specified by component resources_data_safety');
      psychoJS._serverManager.prepareResources(["stimuli/img_di49w.jpg", "stimuli/img_die1d.jpg", "stimuli/img_diq9d.jpg", "stimuli/img_dj2t0.jpg", "stimuli/img_dkqas.jpg", "stimuli/img_dl98k.jpg", "stimuli/img_dmjh8.jpg", "stimuli/img_dmvt8.jpg", "stimuli/img_dosim.jpg", "stimuli/img_dpu2p.jpg", "stimuli/img_dqvoa.jpg", "stimuli/img_dqyvt.jpg", "stimuli/img_drpe9.jpg", "stimuli/img_drqfp.jpg", "stimuli/img_ds88w.jpg", "stimuli/img_dt41h.jpg", "stimuli/img_dtieb.jpg", "stimuli/img_duf05.jpg", "stimuli/img_durse.jpg", "stimuli/img_dv86p.jpg", "stimuli/img_dvfra.jpg", "stimuli/img_dwe2q.jpg", "stimuli/img_dwpyn.jpg", "stimuli/img_e0hwx.jpg", "stimuli/img_e0ksg.jpg", "stimuli/img_e3a7p.jpg", "stimuli/img_e6n5t.jpg", "stimuli/img_e26ut.jpg", "stimuli/img_e44sl.jpg", "stimuli/img_eabk8.jpg", "stimuli/img_eatdk.jpg", "stimuli/img_eaud2.jpg", "stimuli/img_ebg42.jpg", "stimuli/img_ee96u.jpg", "stimuli/img_eez6j.jpg", "stimuli/img_efhdh.jpg", "stimuli/img_eg19b.jpg", "stimuli/img_egb0s.jpg", "stimuli/img_egzbl.jpg", "stimuli/img_eh0no.jpg", "stimuli/img_ehnxi.jpg", "stimuli/img_eiu3c.jpg", "stimuli/img_ejfm6.jpg", "stimuli/img_ejjkj.jpg", "stimuli/img_ejwww.jpg", "stimuli/img_ejy8e.jpg", "stimuli/img_ektr9.jpg", "stimuli/img_emh91.jpg", "stimuli/img_emvfr.jpg", "stimuli/img_en8jg.jpg", "stimuli/img_en9rm.jpg", "stimuli/img_ena0p.jpg", "stimuli/img_enn1x.jpg", "stimuli/img_ensho.jpg", "stimuli/img_ep619.jpg", "stimuli/img_epedy.jpg", "stimuli/img_eppte.jpg", "stimuli/img_es7o2.jpg", "stimuli/img_es115.jpg", "stimuli/img_esb4r.jpg", "stimuli/img_esfc0.jpg", "stimuli/img_est9c.jpg", "stimuli/img_evl9v.jpg", "stimuli/img_ewrjk.jpg", "stimuli/img_exh85.jpg", "stimuli/img_exngf.jpg", "stimuli/img_exxip.jpg", "stimuli/img_f4jxo.jpg", "stimuli/img_f6ujf.jpg", "stimuli/img_f7p1m.jpg", "stimuli/img_f9rr6.jpg", "stimuli/img_f10v5.jpg", "stimuli/img_f14d7.jpg", "stimuli/img_f63yi.jpg", "stimuli/img_faly8.jpg", "stimuli/img_fbihy.jpg", "stimuli/img_fbr46.jpg", "stimuli/img_fcfjj.jpg", "stimuli/img_fea1z.jpg", "stimuli/img_fejeo.jpg", "stimuli/img_ff3f3.jpg", "stimuli/img_ffc83.jpg", "stimuli/img_fhm45.jpg", "stimuli/img_fi08p.jpg", "stimuli/img_fl5cd.jpg", "stimuli/img_fmgjx.jpg", "stimuli/img_fnopw.jpg", "stimuli/img_fnu4h.jpg", "stimuli/img_fpqc0.jpg", "stimuli/img_fq6gu.jpg", "stimuli/img_fqcvd.jpg", "stimuli/img_fqgem.jpg", "stimuli/img_fsgfk.jpg", "stimuli/img_fud7l.jpg", "stimuli/img_fupn0.jpg", "stimuli/img_fz2ma.jpg", "stimuli/img_g1f2q.jpg", "stimuli/img_g1xnc.jpg", "stimuli/img_g2akb.jpg", "stimuli/img_g2q8c.jpg", "stimuli/img_g7pt8.jpg", "stimuli/img_g9od8.jpg", "stimuli/img_g13d5.jpg", "stimuli/img_g35ak.jpg", "stimuli/img_g40qa.jpg", "stimuli/img_g7870.jpg", "stimuli/img_gata2.jpg", "stimuli/img_gb0zn.jpg", "stimuli/img_gb3bv.jpg", "stimuli/img_gbypq.jpg", "stimuli/img_gc501.jpg", "stimuli/img_gd1sw.jpg", "stimuli/img_gdfwi.jpg", "stimuli/img_geavj.jpg", "stimuli/img_gfmug.jpg", "stimuli/img_gi6cy.jpg", "stimuli/img_gid3m.jpg", "stimuli/img_gka64.jpg", "stimuli/img_gnmb6.jpg", "stimuli/img_gnxyk.jpg", "stimuli/img_gos7h.jpg", "stimuli/img_gpkj3.jpg", "stimuli/img_gpywr.jpg", "stimuli/img_gq05l.jpg", "stimuli/img_gquyw.jpg", "stimuli/img_gqy6z.jpg", "stimuli/img_grurj.jpg", "stimuli/img_gsfx4.jpg", "stimuli/img_guobl.jpg", "stimuli/img_gv750.jpg", "stimuli/img_gw408.jpg", "stimuli/img_gwss6.jpg", "stimuli/img_gxm46.jpg", "stimuli/img_gym7g.jpg", "stimuli/img_gzbdr.jpg", "stimuli/img_gztbt.jpg", "stimuli/img_h0hbk.jpg", "stimuli/img_h0px5.jpg", "stimuli/img_h1r0g.jpg", "stimuli/img_h1t95.jpg", "stimuli/img_h1yyu.jpg", "stimuli/img_h2avx.jpg", "stimuli/img_h2i7r.jpg", "stimuli/img_h4cfz.jpg", "stimuli/img_h06l0.jpg", "stimuli/img_h6zqc.jpg", "stimuli/img_h7awa.jpg", "stimuli/img_h7lqc.jpg", "stimuli/img_h8c1f.jpg", "stimuli/img_h9y8n.jpg", "stimuli/img_h13c3.jpg", "stimuli/img_hai5z.jpg", "stimuli/img_hapth.jpg", "stimuli/img_hbemf.jpg", "stimuli/img_hbm4l.jpg", "stimuli/img_hc7o8.jpg", "stimuli/img_hc49v.jpg", "stimuli/img_hdt5e.jpg", "stimuli/img_hfj08.jpg", "stimuli/img_hfte7.jpg", "stimuli/khfp.jpg", "stimuli/kjhgfdfgh.jpg", "stimuli/lituryeyxcfvghjk.jpg", "stimuli/lkjhgfdxsdfghj.jpg", "stimuli/oelkjhgfcfghjk.jpg", "stimuli/sdfghj.jpg", "stimuli/sdfghjklkjbv.jpg", "stimuli/sdfghnb.jpg", "stimuli/uhnbgh.jpg", "stimuli/uhnnfhj.jpg", "stimuli/uzgfvbnh.jpg", "stimuli/vfghbvgh.jpg", "stimuli/wdvhujn.jpg", "stimuli/wertzujhg.jpg", "stimuli/zgfdetz.jpg", "stimuli/ztfcvbnhg.jpg"]);
      resources_data_safety.status = PsychoJS.Status.STARTED;
    }
    
    // *data_safety_text_2* updates
    if (t >= 10 && data_safety_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      data_safety_text_2.tStart = t;  // (not accounting for frame time here)
      data_safety_text_2.frameNStart = frameN;  // exact frame index
      
      data_safety_text_2.setAutoDraw(true);
    }
    
    
    // *data_safety_resp* updates
    if (t >= 10 && data_safety_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      data_safety_resp.tStart = t;  // (not accounting for frame time here)
      data_safety_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { data_safety_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { data_safety_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { data_safety_resp.clearEvents(); });
    }
    
    if (data_safety_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = data_safety_resp.getKeys({keyList: ['space'], waitRelease: false});
      _data_safety_resp_allKeys = _data_safety_resp_allKeys.concat(theseKeys);
      if (_data_safety_resp_allKeys.length > 0) {
        data_safety_resp.keys = _data_safety_resp_allKeys[_data_safety_resp_allKeys.length - 1].name;  // just the last key pressed
        data_safety_resp.rt = _data_safety_resp_allKeys[_data_safety_resp_allKeys.length - 1].rt;
        data_safety_resp.duration = _data_safety_resp_allKeys[_data_safety_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of data_safetyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function data_safetyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'data_safety' ---
    for (const thisComponent of data_safetyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    data_safety_resp.stop();
    // the Routine "data_safety" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _data_safety_2_resp_allKeys;
var data_safety_2Components;
function data_safety_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'data_safety_2' ---
    t = 0;
    data_safety_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    data_safety_2_resp.keys = undefined;
    data_safety_2_resp.rt = undefined;
    _data_safety_2_resp_allKeys = [];
    // keep track of which components have finished
    data_safety_2Components = [];
    data_safety_2Components.push(data_safety_2_text);
    data_safety_2Components.push(resources_data_safety_2);
    data_safety_2Components.push(data_safety_2_text_2);
    data_safety_2Components.push(data_safety_2_resp);
    
    for (const thisComponent of data_safety_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function data_safety_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'data_safety_2' ---
    // get current time
    t = data_safety_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *data_safety_2_text* updates
    if (t >= 0.5 && data_safety_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      data_safety_2_text.tStart = t;  // (not accounting for frame time here)
      data_safety_2_text.frameNStart = frameN;  // exact frame index
      
      data_safety_2_text.setAutoDraw(true);
    }
    
    frameRemains = 10  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((data_safety_2_text.status === PsychoJS.Status.STARTED || data_safety_2_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      data_safety_2_text.setAutoDraw(false);
    }
    // start downloading resources specified by component resources_data_safety_2
    if (t >= 0 && resources_data_safety_2.status === PsychoJS.Status.NOT_STARTED) {
      console.log('register and start downloading resources specified by component resources_data_safety_2');
      psychoJS._serverManager.prepareResources(["stimuli/img_hfz8w.jpg", "stimuli/img_hkghg.jpg", "stimuli/img_hkofm.jpg", "stimuli/img_hkulp.jpg", "stimuli/img_hkye1.jpg", "stimuli/img_hmmlh.jpg", "stimuli/img_hmmra.jpg", "stimuli/img_hnu4f.jpg", "stimuli/img_hpp0m.jpg", "stimuli/img_hs7yp.jpg", "stimuli/img_huisn.jpg", "stimuli/img_i0its.jpg", "stimuli/img_i1q3w.jpg", "stimuli/img_i2k07.jpg", "stimuli/img_i2l9a.jpg", "stimuli/img_i3eml.jpg", "stimuli/img_i6wsx.jpg", "stimuli/img_i7l1f.jpg", "stimuli/img_i7vab.jpg", "stimuli/img_i8ivs.jpg", "stimuli/img_i8t7j.jpg", "stimuli/img_i48d8.jpg", "stimuli/img_i64cx.jpg", "stimuli/img_i84x0.jpg", "stimuli/img_iaqri.jpg", "stimuli/img_ic3os.jpg", "stimuli/img_iebbz.jpg", "stimuli/img_ifdbq.jpg", "stimuli/img_ifebc.jpg", "stimuli/img_ih86d.jpg", "stimuli/img_ik9n7.jpg", "stimuli/img_ikk62.jpg", "stimuli/img_il020.jpg", "stimuli/img_ilxas.jpg", "stimuli/img_im869.jpg", "stimuli/img_imn1t.jpg", "stimuli/img_inan9.jpg", "stimuli/img_indf1.jpg", "stimuli/img_injp0.jpg", "stimuli/img_inlbv.jpg", "stimuli/img_inqod.jpg", "stimuli/img_iomcd.jpg", "stimuli/img_iqmdm.jpg", "stimuli/img_isw29.jpg", "stimuli/img_iudc4.jpg", "stimuli/img_iuk9x.jpg", "stimuli/img_ivx6p.jpg", "stimuli/img_ixn72.jpg", "stimuli/img_iydb8.jpg", "stimuli/img_iyxnj.jpg", "stimuli/img_izc5x.jpg", "stimuli/img_izuw9.jpg", "stimuli/img_j0r8b.jpg", "stimuli/img_j0x19.jpg", "stimuli/img_j4ttn.jpg", "stimuli/img_j5nfe.jpg", "stimuli/img_j5rpx.jpg", "stimuli/img_j6uoq.jpg", "stimuli/img_j36ca.jpg", "stimuli/img_j48t0.jpg", "stimuli/img_j59kz.jpg", "stimuli/img_j73b6.jpg", "stimuli/img_j84mp.jpg", "stimuli/img_j95nw.jpg", "stimuli/img_j856a.jpg", "stimuli/img_jag6g.jpg", "stimuli/img_janqt.jpg", "stimuli/img_jbcql.jpg", "stimuli/img_jcisc.jpg", "stimuli/img_jdkip.jpg", "stimuli/img_jdwkq.jpg", "stimuli/img_jekv7.jpg", "stimuli/img_jfbpi.jpg", "stimuli/img_jge7p.jpg", "stimuli/img_jgqri.jpg", "stimuli/img_jht4u.jpg", "stimuli/img_ji4iw.jpg", "stimuli/img_ji42o.jpg", "stimuli/img_jivhq.jpg", "stimuli/img_jkm86.jpg", "stimuli/img_jlw8j.jpg", "stimuli/img_jnd9p.jpg", "stimuli/img_jo3gx.jpg", "stimuli/img_jp28n.jpg", "stimuli/img_jpjeg.jpg", "stimuli/img_jpldg.jpg", "stimuli/img_jqkok.jpg", "stimuli/img_jr212.jpg", "stimuli/img_jt5x9.jpg", "stimuli/img_jueds.jpg", "stimuli/img_jukwv.jpg", "stimuli/img_juob3.jpg", "stimuli/img_jwfcq.jpg", "stimuli/img_jxld3.jpg", "stimuli/img_jz3kd.jpg", "stimuli/img_jzjqz.jpg", "stimuli/img_k0m56.jpg", "stimuli/img_k0ze7.jpg", "stimuli/img_k1i0k.jpg", "stimuli/img_k3abb.jpg", "stimuli/img_k3ouq.jpg", "stimuli/img_k03rq.jpg", "stimuli/img_k4zhm.jpg", "stimuli/img_k6j9e.jpg", "stimuli/img_k8cba.jpg", "stimuli/img_kavjj.jpg", "stimuli/img_kb1xm.jpg", "stimuli/img_kcpu9.jpg", "stimuli/img_kd5cu.jpg", "stimuli/img_kezv3.jpg", "stimuli/img_kf7vw.jpg", "stimuli/img_kfm71.jpg", "stimuli/img_kg1ce.jpg", "stimuli/img_kg46o.jpg", "stimuli/img_kisg0.jpg", "stimuli/img_kjbrh.jpg", "stimuli/img_kkqxu.jpg", "stimuli/img_kljj4.jpg", "stimuli/img_kmd1l.jpg", "stimuli/img_kn0we.jpg", "stimuli/img_ko791.jpg", "stimuli/img_kombf.jpg", "stimuli/img_koooi.jpg", "stimuli/img_kost0.jpg", "stimuli/img_kq9s9.jpg", "stimuli/img_krd7g.jpg", "stimuli/img_ksodl.jpg", "stimuli/img_kt81t.jpg", "stimuli/img_ktbat.jpg", "stimuli/img_ktf8f.jpg", "stimuli/img_ktg8p.jpg", "stimuli/img_kugyw.jpg", "stimuli/img_kv1gv.jpg", "stimuli/img_kwbzo.jpg", "stimuli/img_kweju.jpg", "stimuli/img_kwxq1.jpg", "stimuli/img_kx2b3.jpg", "stimuli/img_kyn6z.jpg", "stimuli/img_kzay4.jpg", "stimuli/img_kzb75.jpg", "stimuli/img_kzg3h.jpg", "stimuli/img_kzh5g.jpg", "stimuli/img_l1eln.jpg", "stimuli/img_l1h36.jpg", "stimuli/img_l3yc8.jpg", "stimuli/img_l6rki.jpg", "stimuli/img_l9pkc.jpg", "stimuli/img_l9t30.jpg", "stimuli/img_l9zdy.jpg", "stimuli/img_l42rg.jpg", "stimuli/img_l42rw.jpg", "stimuli/img_l51hs.jpg", "stimuli/img_laubq.jpg", "stimuli/img_ldof4.jpg", "stimuli/img_ldsb1.jpg", "stimuli/img_le8uf.jpg", "stimuli/img_let89.jpg", "stimuli/img_lezrq.jpg", "stimuli/img_lgxzn.jpg", "stimuli/img_lgyo6.jpg"]);
      resources_data_safety_2.status = PsychoJS.Status.STARTED;
    }
    
    // *data_safety_2_text_2* updates
    if (t >= 10 && data_safety_2_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      data_safety_2_text_2.tStart = t;  // (not accounting for frame time here)
      data_safety_2_text_2.frameNStart = frameN;  // exact frame index
      
      data_safety_2_text_2.setAutoDraw(true);
    }
    
    
    // *data_safety_2_resp* updates
    if (t >= 0.0 && data_safety_2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      data_safety_2_resp.tStart = t;  // (not accounting for frame time here)
      data_safety_2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { data_safety_2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { data_safety_2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { data_safety_2_resp.clearEvents(); });
    }
    
    if (data_safety_2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = data_safety_2_resp.getKeys({keyList: ['space'], waitRelease: false});
      _data_safety_2_resp_allKeys = _data_safety_2_resp_allKeys.concat(theseKeys);
      if (_data_safety_2_resp_allKeys.length > 0) {
        data_safety_2_resp.keys = _data_safety_2_resp_allKeys[_data_safety_2_resp_allKeys.length - 1].name;  // just the last key pressed
        data_safety_2_resp.rt = _data_safety_2_resp_allKeys[_data_safety_2_resp_allKeys.length - 1].rt;
        data_safety_2_resp.duration = _data_safety_2_resp_allKeys[_data_safety_2_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of data_safety_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function data_safety_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'data_safety_2' ---
    for (const thisComponent of data_safety_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    data_safety_2_resp.stop();
    // the Routine "data_safety_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instructions_cat_resp_allKeys;
var instructions_catComponents;
function instructions_catRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_cat' ---
    t = 0;
    instructions_catClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructions_cat_resp.keys = undefined;
    instructions_cat_resp.rt = undefined;
    _instructions_cat_resp_allKeys = [];
    // keep track of which components have finished
    instructions_catComponents = [];
    instructions_catComponents.push(instructions_cat_text);
    instructions_catComponents.push(resources_instructions_cat);
    instructions_catComponents.push(instructions_cat_text_2);
    instructions_catComponents.push(instructions_cat_resp);
    
    for (const thisComponent of instructions_catComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_catRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_cat' ---
    // get current time
    t = instructions_catClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_cat_text* updates
    if (t >= 0.5 && instructions_cat_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_cat_text.tStart = t;  // (not accounting for frame time here)
      instructions_cat_text.frameNStart = frameN;  // exact frame index
      
      instructions_cat_text.setAutoDraw(true);
    }
    
    frameRemains = 25  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((instructions_cat_text.status === PsychoJS.Status.STARTED || instructions_cat_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      instructions_cat_text.setAutoDraw(false);
    }
    // start downloading resources specified by component resources_instructions_cat
    if (t >= 0 && resources_instructions_cat.status === PsychoJS.Status.NOT_STARTED) {
      console.log('register and start downloading resources specified by component resources_instructions_cat');
      psychoJS._serverManager.prepareResources(["stimuli/img_lku96.jpg", "stimuli/img_lo6c4.jpg", "stimuli/img_lpas9.jpg", "stimuli/img_lpj57.jpg", "stimuli/img_lpr0l.jpg", "stimuli/img_lq6pv.jpg", "stimuli/img_lqbid.jpg", "stimuli/img_lqpgn.jpg", "stimuli/img_lrjaj.jpg", "stimuli/img_lszzj.jpg", "stimuli/img_lt0pg.jpg", "stimuli/img_luk7x.jpg", "stimuli/img_lvuz8.jpg", "stimuli/img_lysx3.jpg", "stimuli/img_lzix2.jpg", "stimuli/img_lzz3x.jpg", "stimuli/img_m1m03.jpg", "stimuli/img_m2gan.jpg", "stimuli/img_m03ns.jpg", "stimuli/img_m4w0y.jpg", "stimuli/img_m6q5q.jpg", "stimuli/img_m7i17.jpg", "stimuli/img_m7zn0.jpg", "stimuli/img_m8krt.jpg", "stimuli/img_m9db9.jpg", "stimuli/img_m59op.jpg", "stimuli/img_m5999.jpg", "stimuli/img_makxc.jpg", "stimuli/img_mawe6.jpg", "stimuli/img_mbdnp.jpg", "stimuli/img_mbwpx.jpg", "stimuli/img_mc6a7.jpg", "stimuli/img_md6k3.jpg", "stimuli/img_md42t.jpg", "stimuli/img_mdh76.jpg", "stimuli/img_mdlpz.jpg", "stimuli/img_mdpr4.jpg", "stimuli/img_mdso0.jpg", "stimuli/img_mgicq.jpg", "stimuli/img_mgnmm.jpg", "stimuli/img_mgz7m.jpg", "stimuli/img_mh6x6.jpg", "stimuli/img_mhh9m.jpg", "stimuli/img_mhkzb.jpg", "stimuli/img_mjxmq.jpg", "stimuli/img_mkd9h.jpg", "stimuli/img_mnorf.jpg", "stimuli/img_moplo.jpg", "stimuli/img_mpbxf.jpg", "stimuli/img_mpi7m.jpg", "stimuli/img_mqnl6.jpg", "stimuli/img_mr7a9.jpg", "stimuli/img_msawn.jpg", "stimuli/img_mucwi.jpg", "stimuli/img_mvoj8.jpg", "stimuli/img_myy0m.jpg", "stimuli/img_n03fu.jpg", "stimuli/img_n3xxp.jpg", "stimuli/img_n5b2k.jpg", "stimuli/img_n5ohn.jpg", "stimuli/img_n6mqe.jpg", "stimuli/img_n7qvz.jpg", "stimuli/img_n9teq.jpg", "stimuli/img_n9xll.jpg", "stimuli/img_n33fg.jpg", "stimuli/img_n42jt.jpg", "stimuli/img_n474d.jpg", "stimuli/img_nb8p4.jpg", "stimuli/img_ncr40.jpg", "stimuli/img_ncy2j.jpg", "stimuli/img_nfbnr.jpg", "stimuli/img_njear.jpg", "stimuli/img_njhlh.jpg", "stimuli/img_njmgp.jpg", "stimuli/img_nn7hq.jpg", "stimuli/img_nnbe1.jpg", "stimuli/img_nng17.jpg", "stimuli/img_np28f.jpg", "stimuli/img_npkd5.jpg", "stimuli/img_nptnl.jpg", "stimuli/img_nq3rf.jpg", "stimuli/img_nr8nj.jpg", "stimuli/img_nv5xw.jpg", "stimuli/img_nvwkl.jpg", "stimuli/img_nyu3q.jpg", "stimuli/img_nyv2b.jpg", "stimuli/img_nzgtz.jpg", "stimuli/img_nzqfw.jpg", "stimuli/img_o0n1u.jpg", "stimuli/img_o0onm.jpg", "stimuli/img_o2lar.jpg", "stimuli/img_o5afe.jpg", "stimuli/img_o6cff.jpg", "stimuli/img_o7iev.jpg", "stimuli/img_o8tf1.jpg", "stimuli/img_o9czo.jpg", "stimuli/img_o9og9.jpg", "stimuli/img_o19em.jpg", "stimuli/img_o30wb.jpg", "stimuli/img_o33w3.jpg", "stimuli/img_o37la.jpg", "stimuli/img_oadw2.jpg", "stimuli/img_oau79.jpg", "stimuli/img_oavm6.jpg", "stimuli/img_oeddm.jpg", "stimuli/img_of8d6.jpg", "stimuli/img_ogcv5.jpg", "stimuli/img_ohtbu.jpg", "stimuli/img_oieot.jpg", "stimuli/img_oimxl.jpg", "stimuli/img_oiusw.jpg", "stimuli/img_ok82a.jpg", "stimuli/img_okvvw.jpg", "stimuli/img_olep6.jpg", "stimuli/img_oo0i9.jpg", "stimuli/img_oou46.jpg", "stimuli/img_opxap.jpg", "stimuli/img_os8fo.jpg", "stimuli/img_os89g.jpg", "stimuli/img_ose78.jpg", "stimuli/img_osjck.jpg", "stimuli/img_otfo3.jpg", "stimuli/img_otj9x.jpg", "stimuli/img_owbre.jpg", "stimuli/img_owg3e.jpg", "stimuli/img_owq46.jpg", "stimuli/img_oxcuq.jpg", "stimuli/img_oxf89.jpg", "stimuli/img_oz18d.jpg", "stimuli/img_ozluf.jpg", "stimuli/img_ozowa.jpg", "stimuli/img_ozxpp.jpg", "stimuli/img_p3c7o.jpg", "stimuli/img_p3hpc.jpg", "stimuli/img_p4oj7.jpg", "stimuli/img_p4vf0.jpg", "stimuli/img_p8das.jpg", "stimuli/img_p8jss.jpg", "stimuli/img_p9d3u.jpg", "stimuli/img_p43sm.jpg", "stimuli/img_p347u.jpg", "stimuli/img_p659z.jpg", "stimuli/img_pbsj1.jpg", "stimuli/img_pcl29.jpg", "stimuli/img_pdl2o.jpg", "stimuli/img_pdzf1.jpg", "stimuli/img_pey7u.jpg", "stimuli/img_pey9d.jpg", "stimuli/img_pfjtx.jpg", "stimuli/img_pflhy.jpg", "stimuli/img_pgiog.jpg", "stimuli/img_pgxzn.jpg", "stimuli/img_phof9.jpg", "stimuli/img_pi7sb.jpg", "stimuli/img_piyzo.jpg", "stimuli/img_pja09.jpg", "stimuli/img_pjfx6.jpg", "stimuli/img_plp16.jpg", "stimuli/img_pn8ex.jpg", "stimuli/img_pna7l.jpg", "stimuli/img_pp4ha.jpg", "stimuli/img_pqmsq.jpg", "stimuli/img_ps986.jpg", "stimuli/img_psgf7.jpg", "stimuli/img_pstl3.jpg", "stimuli/img_psuqq.jpg", "stimuli/img_pt3d7.jpg", "stimuli/img_ptsls.jpg", "stimuli/img_puzub.jpg", "stimuli/img_pwzku.jpg", "stimuli/img_pxdo9.jpg", "stimuli/img_pxhcp.jpg", "stimuli/img_py5yk.jpg", "stimuli/img_py7rq.jpg", "stimuli/img_q1dcp.jpg", "stimuli/img_q1pin.jpg", "stimuli/img_q1ynd.jpg", "stimuli/img_q3mdq.jpg", "stimuli/img_q5ldz.jpg", "stimuli/img_q5tqy.jpg", "stimuli/img_q7p8m.jpg", "stimuli/img_q8u19.jpg", "stimuli/img_q9a89.jpg", "stimuli/img_q9lab.jpg", "stimuli/img_q9wzp.jpg", "stimuli/img_q086i.jpg", "stimuli/img_q577a.jpg", "stimuli/img_q0711.jpg", "stimuli/img_qb2nc.jpg", "stimuli/img_qb95w.jpg", "stimuli/img_qbdgm.jpg", "stimuli/img_qbkdt.jpg", "stimuli/img_qc2ss.jpg", "stimuli/img_qdi9n.jpg", "stimuli/img_qdln8.jpg", "stimuli/img_qdry3.jpg", "stimuli/img_qevid.jpg", "stimuli/img_qf1bp.jpg", "stimuli/img_qgbyn.jpg", "stimuli/img_qgyas.jpg", "stimuli/img_qh2z2.jpg", "stimuli/img_qihxi.jpg", "stimuli/img_qiib2.jpg", "stimuli/img_qkojj.jpg", "stimuli/img_qkuvg.jpg", "stimuli/img_qmand.jpg", "stimuli/img_qmgwq.jpg", "stimuli/img_qmo79.jpg", "stimuli/img_qmveb.jpg", "stimuli/img_qneik.jpg", "stimuli/img_qnmhk.jpg", "stimuli/img_qom5l.jpg", "stimuli/img_qp63u.jpg", "stimuli/img_qqkbi.jpg", "stimuli/img_qr54p.jpg", "stimuli/img_qrc78.jpg", "stimuli/img_qtvud.jpg", "stimuli/img_qwfdj.jpg", "stimuli/img_qwjcs.jpg", "stimuli/img_qwtnc.jpg", "stimuli/img_qxnyp.jpg", "stimuli/img_qxryo.jpg", "stimuli/img_qys69.jpg", "stimuli/img_qywyi.jpg", "stimuli/img_qz292.jpg", "stimuli/img_qzmmi.jpg", "stimuli/img_qzvnm.jpg", "stimuli/img_r0jzd.jpg", "stimuli/img_r2e5e.jpg", "stimuli/img_r2iwq.jpg", "stimuli/img_r2lxk.jpg", "stimuli/img_r3i5r.jpg", "stimuli/img_r4bih.jpg", "stimuli/img_r4kgh.jpg", "stimuli/img_r6gnz.jpg", "stimuli/img_r8rvk.jpg", "stimuli/img_r10cu.jpg", "stimuli/img_r77yy.jpg", "stimuli/img_r93m2.jpg", "stimuli/img_r97z5.jpg", "stimuli/img_ra2nm.jpg", "stimuli/img_rav8j.jpg", "stimuli/img_rb81s.jpg", "stimuli/img_ret8n.jpg", "stimuli/img_reur3.jpg", "stimuli/img_rf540.jpg", "stimuli/img_rg4in.jpg", "stimuli/img_ri0yx.jpg", "stimuli/img_riuqe.jpg", "stimuli/img_rktqz.jpg", "stimuli/img_rm970.jpg", "stimuli/img_rp7y5.jpg", "stimuli/img_rpdms.jpg", "stimuli/img_rru0v.jpg", "stimuli/img_rs1ci.jpg", "stimuli/img_rs698.jpg", "stimuli/img_rscpb.jpg", "stimuli/img_rsq73.jpg", "stimuli/img_ru898.jpg", "stimuli/img_rubqw.jpg", "stimuli/img_rutfm.jpg", "stimuli/img_rv6im.jpg", "stimuli/img_rv94l.jpg", "stimuli/img_rvssl.jpg", "stimuli/img_rwni4.jpg", "stimuli/img_rwrwh.jpg", "stimuli/img_rx5aw.jpg", "stimuli/img_rxvls.jpg", "stimuli/img_rych7.jpg", "stimuli/img_ryeok.jpg", "stimuli/img_rzbn4.jpg", "stimuli/img_s1t24.jpg", "stimuli/img_s2adu.jpg", "stimuli/img_s2zoe.jpg", "stimuli/img_s3jnm.jpg", "stimuli/img_s3ngq.jpg", "stimuli/img_s4mc1.jpg", "stimuli/img_s5pjy.jpg", "stimuli/img_s7fln.jpg", "stimuli/img_s8wty.jpg", "stimuli/img_s9are.jpg", "stimuli/img_s27ju.jpg", "stimuli/img_s37yz.jpg", "stimuli/img_s044n.jpg", "stimuli/img_s58iu.jpg", "stimuli/img_scgrr.jpg", "stimuli/img_scrdm.jpg", "stimuli/img_sds4p.jpg", "stimuli/img_sdt7q.jpg", "stimuli/img_sebb3.jpg", "stimuli/img_sf1lc.jpg", "stimuli/img_sfh4b.jpg", "stimuli/img_sfq2m.jpg", "stimuli/img_sgt5b.jpg", "stimuli/img_sgwc6.jpg", "stimuli/img_sh0eu.jpg", "stimuli/img_shopj.jpg", "stimuli/img_si5ct.jpg", "stimuli/img_sjwso.jpg", "stimuli/img_sk2ou.jpg", "stimuli/img_sldxx.jpg", "stimuli/img_sltwe.jpg", "stimuli/img_sojqy.jpg", "stimuli/img_sqvv6.jpg", "stimuli/img_su4ip.jpg", "stimuli/img_svf0q.jpg", "stimuli/img_svpek.jpg", "stimuli/img_svtxr.jpg", "stimuli/img_swcci.jpg", "stimuli/img_swjli.jpg", "stimuli/img_swq34.jpg", "stimuli/img_swrxs.jpg", "stimuli/img_swx2d.jpg", "stimuli/img_sx68r.jpg", "stimuli/img_sxgfb.jpg", "stimuli/img_sxyb5.jpg", "stimuli/img_syam3.jpg", "stimuli/img_syyee.jpg", "stimuli/img_t0a2l.jpg", "stimuli/img_t1cr9.jpg", "stimuli/img_t1fjg.jpg", "stimuli/img_t2bng.jpg", "stimuli/img_t2ioc.jpg", "stimuli/img_t3d7r.jpg", "stimuli/img_t3fqu.jpg", "stimuli/img_t3htz.jpg", "stimuli/img_t3r1g.jpg", "stimuli/img_t4hvr.jpg", "stimuli/img_t4n50.jpg", "stimuli/img_t4sid.jpg", "stimuli/img_t4xel.jpg", "stimuli/img_t5naw.jpg", "stimuli/img_t6kah.jpg", "stimuli/img_t6rsv.jpg", "stimuli/img_t27my.jpg", "stimuli/img_t44om.jpg", "stimuli/img_t90e2.jpg", "stimuli/img_tbs4n.jpg", "stimuli/img_tdabb.jpg", "stimuli/img_te3lf.jpg", "stimuli/img_tehqm.jpg", "stimuli/img_tejio.jpg", "stimuli/img_tfavl.jpg", "stimuli/img_th7xh.jpg", "stimuli/img_tj2c5.jpg", "stimuli/img_tj6dy.jpg", "stimuli/img_tk0cz.jpg", "stimuli/img_tk15d.jpg", "stimuli/img_tl4pg.jpg", "stimuli/img_tlirb.jpg", "stimuli/img_tmxgq.jpg", "stimuli/img_tn8ys.jpg", "stimuli/img_to58w.jpg", "stimuli/img_tqo7w.jpg", "stimuli/img_tr42p.jpg", "stimuli/img_tseae.jpg", "stimuli/img_tsf9y.jpg", "stimuli/img_ttz6v.jpg", "stimuli/img_tui7c.jpg", "stimuli/img_tujn3.jpg", "stimuli/img_tv8e2.jpg", "stimuli/img_tw4o4.jpg", "stimuli/img_tw371.jpg", "stimuli/img_twj5p.jpg", "stimuli/img_u1i9n.jpg", "stimuli/img_u1llj.jpg", "stimuli/img_u1rxv.jpg", "stimuli/img_u1smj.jpg", "stimuli/img_u1zu9.jpg", "stimuli/img_u2o6z.jpg", "stimuli/img_u4w09.jpg", "stimuli/img_u5hpm.jpg", "stimuli/img_u8kqw.jpg", "stimuli/img_u8vwr.jpg", "stimuli/img_u8ww8.jpg", "stimuli/img_u9f9l.jpg", "stimuli/img_u61vc.jpg", "stimuli/img_ua9bs.jpg", "stimuli/img_uaieh.jpg", "stimuli/img_ub01k.jpg", "stimuli/img_ub3bp.jpg", "stimuli/img_ub9nn.jpg", "stimuli/img_ubf63.jpg", "stimuli/img_ubgi0.jpg", "stimuli/img_uc67x.jpg", "stimuli/img_uch3x.jpg", "stimuli/img_uegbb.jpg", "stimuli/img_uhmld.jpg", "stimuli/img_ukx4f.jpg", "stimuli/img_ulgl4.jpg", "stimuli/img_um93g.jpg", "stimuli/img_un4mu.jpg", "stimuli/img_uof42.jpg", "stimuli/img_upuu2.jpg", "stimuli/img_uq6e0.jpg", "stimuli/img_uqf3j.jpg", "stimuli/img_ur4j0.jpg", "stimuli/img_uso44.jpg", "stimuli/img_uspja.jpg", "stimuli/img_uttnz.jpg", "stimuli/img_uwv6y.jpg", "stimuli/img_uxlg0.jpg", "stimuli/img_uxxo0.jpg", "stimuli/img_uy1n4.jpg", "stimuli/img_uzati.jpg", "stimuli/img_uzy3h.jpg", "stimuli/img_v0i83.jpg", "stimuli/img_v00yc.jpg", "stimuli/img_v2z5q.jpg", "stimuli/img_v5dph.jpg", "stimuli/img_v6kq9.jpg", "stimuli/img_v6oqe.jpg", "stimuli/img_v7eom.jpg", "stimuli/img_v7r9g.jpg", "stimuli/img_v7vwy.jpg", "stimuli/img_v8dra.jpg", "stimuli/img_v8lnh.jpg", "stimuli/img_v8z0x.jpg", "stimuli/img_v9pm7.jpg", "stimuli/img_v60rh.jpg", "stimuli/img_v176l.jpg", "stimuli/img_v455z.jpg", "stimuli/img_v759b.jpg", "stimuli/img_v771n.jpg", "stimuli/img_v6435.jpg", "stimuli/img_v8130.jpg", "stimuli/img_vad83.jpg", "stimuli/img_vbgti.jpg", "stimuli/img_vbrb7.jpg", "stimuli/img_vctdl.jpg", "stimuli/img_vg73h.jpg", "stimuli/img_vgaye.jpg", "stimuli/img_vgg17.jpg", "stimuli/img_vgh2g.jpg", "stimuli/img_vh7v8.jpg", "stimuli/img_vjlaz.jpg", "stimuli/img_vlham.jpg", "stimuli/img_vn2f7.jpg", "stimuli/img_vnxft.jpg", "stimuli/img_vpukg.jpg", "stimuli/img_vqoy9.jpg", "stimuli/img_vsi8r.jpg", "stimuli/img_vszud.jpg", "stimuli/img_vwrot.jpg", "stimuli/img_vx3gs.jpg", "stimuli/img_vxr2x.jpg", "stimuli/img_vyrq8.jpg", "stimuli/img_vz25d.jpg", "stimuli/img_w1hql.jpg", "stimuli/img_w5vvu.jpg", "stimuli/img_w6vl1.jpg", "stimuli/img_w8hcx.jpg", "stimuli/img_w8ilf.jpg", "stimuli/img_w8jfk.jpg", "stimuli/img_w8yhd.jpg", "stimuli/img_w29lp.jpg", "stimuli/img_w45yf.jpg", "stimuli/img_w3271.jpg", "stimuli/img_wb1os.jpg", "stimuli/img_wbws6.jpg", "stimuli/img_wcdw9.jpg", "stimuli/img_we7h7.jpg", "stimuli/img_wfdg9.jpg", "stimuli/img_wgddx.jpg", "stimuli/img_wgkqa.jpg", "stimuli/img_wgvt7.jpg", "stimuli/img_wi06o.jpg", "stimuli/img_wijef.jpg", "stimuli/img_wiwqu.jpg", "stimuli/img_wixv2.jpg", "stimuli/img_wjjqy.jpg", "stimuli/img_wk81m.jpg", "stimuli/img_wm47a.jpg", "stimuli/img_wn462.jpg", "stimuli/img_wppku.jpg", "stimuli/img_wrakq.jpg", "stimuli/img_wri3l.jpg", "stimuli/img_wtz6m.jpg", "stimuli/img_wuen7.jpg", "stimuli/img_wv3dg.jpg", "stimuli/img_wvzgm.jpg", "stimuli/img_wwe90.jpg", "stimuli/img_wwmp0.jpg", "stimuli/img_wxa5a.jpg", "stimuli/img_wyctg.jpg", "stimuli/img_wyl6z.jpg", "stimuli/img_wz6x5.jpg", "stimuli/img_wzgy7.jpg", "stimuli/img_wzsnn.jpg", "stimuli/img_x0sow.jpg", "stimuli/img_x0u5z.jpg", "stimuli/img_x0v7n.jpg", "stimuli/img_x0zla.jpg", "stimuli/img_x1c37.jpg", "stimuli/img_x1lo7.jpg", "stimuli/img_x3iff.jpg", "stimuli/img_x4bln.jpg", "stimuli/img_x8jid.jpg", "stimuli/img_x8z4x.jpg", "stimuli/img_x9ml4.jpg", "stimuli/img_x9w7o.jpg", "stimuli/img_x50f8.jpg", "stimuli/img_x63s2.jpg", "stimuli/img_x388f.jpg", "stimuli/img_x827l.jpg", "stimuli/img_xbtev.jpg", "stimuli/img_xc043.jpg", "stimuli/img_xd5c3.jpg", "stimuli/img_xdbq1.jpg", "stimuli/img_xdhz2.jpg", "stimuli/img_xe6fa.jpg", "stimuli/img_xebaj.jpg", "stimuli/img_xesl0.jpg", "stimuli/img_xf20k.jpg", "stimuli/img_xfhmz.jpg", "stimuli/img_xguy9.jpg", "stimuli/img_xhe1x.jpg", "stimuli/img_xhns1.jpg", "stimuli/img_xib79.jpg", "stimuli/img_xilm6.jpg", "stimuli/img_xnqvq.jpg", "stimuli/img_xnyo5.jpg", "stimuli/img_xpco9.jpg", "stimuli/img_xq4tr.jpg", "stimuli/img_xr3up.jpg", "stimuli/img_xrzk6.jpg", "stimuli/img_xsdds.jpg", "stimuli/img_xt3jt.jpg", "stimuli/img_xtb79.jpg", "stimuli/img_xti0z.jpg", "stimuli/img_xtizs.jpg", "stimuli/img_xtklg.jpg", "stimuli/img_xu1p3.jpg", "stimuli/img_xubpo.jpg", "stimuli/img_xv2cm.jpg", "stimuli/img_xwdba.jpg", "stimuli/img_xy930.jpg", "stimuli/img_xz4gr.jpg", "stimuli/img_xzcet.jpg", "stimuli/img_xzts6.jpg", "stimuli/img_xzyzy.jpg", "stimuli/img_y2na4.jpg", "stimuli/img_y4n97.jpg", "stimuli/img_y5xn1.jpg", "stimuli/img_y6u9g.jpg", "stimuli/img_y9o0x.jpg", "stimuli/img_y25a7.jpg", "stimuli/img_yamtw.jpg", "stimuli/img_ybbmx.jpg", "stimuli/img_ycgfe.jpg", "stimuli/img_ydkv8.jpg", "stimuli/img_ye2a5.jpg", "stimuli/img_ye5sl.jpg", "stimuli/img_ye14l.jpg", "stimuli/img_yeh72.jpg", "stimuli/img_yf849.jpg", "stimuli/img_ygb10.jpg", "stimuli/img_yglfe.jpg", "stimuli/img_yhiqc.jpg", "stimuli/img_yjb6e.jpg", "stimuli/img_yju0d.jpg", "stimuli/img_ykoa1.jpg", "stimuli/img_ykxul.jpg", "stimuli/img_ymgcb.jpg", "stimuli/img_ymysv.jpg", "stimuli/img_ynuix.jpg", "stimuli/img_yorhj.jpg", "stimuli/img_yosqb.jpg", "stimuli/img_ypxmx.jpg", "stimuli/img_yqg5q.jpg", "stimuli/img_yqoce.jpg", "stimuli/img_yqr7b.jpg", "stimuli/img_yqrjj.jpg", "stimuli/img_yqz1y.jpg", "stimuli/img_ys3qz.jpg", "stimuli/img_ysb5z.jpg", "stimuli/img_yt3ea.jpg", "stimuli/img_yteqw.jpg", "stimuli/img_yvvo0.jpg", "stimuli/img_yxd19.jpg", "stimuli/img_yxhxk.jpg", "stimuli/img_yze5s.jpg", "stimuli/img_z2mg7.jpg", "stimuli/img_z3yzz.jpg", "stimuli/img_z4jxm.jpg", "stimuli/img_z5osu.jpg", "stimuli/img_z7m8s.jpg", "stimuli/img_z9aux.jpg", "stimuli/img_z10c7.jpg", "stimuli/img_z028x.jpg", "stimuli/img_z44hw.jpg", "stimuli/img_z293c.jpg", "stimuli/img_zac3b.jpg", "stimuli/img_zcj7v.jpg", "stimuli/img_zdb2v.jpg", "stimuli/img_ze7ns.jpg", "stimuli/img_zfx9o.jpg", "stimuli/img_zg02f.jpg", "stimuli/img_zgg62.jpg", "stimuli/img_zgnbf.jpg", "stimuli/img_zh8ms.jpg", "stimuli/img_zi8qc.jpg", "stimuli/img_zi682.jpg", "stimuli/img_zj0vx.jpg", "stimuli/img_zpsau.jpg", "stimuli/img_zrn6n.jpg", "stimuli/img_zshx7.jpg", "stimuli/img_zt893.jpg", "stimuli/img_ztfay.jpg", "stimuli/img_ztovt.jpg", "stimuli/img_zv0dq.jpg", "stimuli/img_zvi2m.jpg", "stimuli/img_zxvl3.jpg", "stimuli/img_zy7pc.jpg", "stimuli/img_zyhbo.jpg", "stimuli/img_zz5u8.jpg", "stimuli/img_zzb9f.jpg", "stimuli/img_zzv3k.jpg"]);
      resources_instructions_cat.status = PsychoJS.Status.STARTED;
    }
    
    // *instructions_cat_text_2* updates
    if (t >= 25 && instructions_cat_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_cat_text_2.tStart = t;  // (not accounting for frame time here)
      instructions_cat_text_2.frameNStart = frameN;  // exact frame index
      
      instructions_cat_text_2.setAutoDraw(true);
    }
    
    
    // *instructions_cat_resp* updates
    if (t >= 25 && instructions_cat_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_cat_resp.tStart = t;  // (not accounting for frame time here)
      instructions_cat_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_cat_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_cat_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_cat_resp.clearEvents(); });
    }
    
    if (instructions_cat_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_cat_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_cat_resp_allKeys = _instructions_cat_resp_allKeys.concat(theseKeys);
      if (_instructions_cat_resp_allKeys.length > 0) {
        instructions_cat_resp.keys = _instructions_cat_resp_allKeys[_instructions_cat_resp_allKeys.length - 1].name;  // just the last key pressed
        instructions_cat_resp.rt = _instructions_cat_resp_allKeys[_instructions_cat_resp_allKeys.length - 1].rt;
        instructions_cat_resp.duration = _instructions_cat_resp_allKeys[_instructions_cat_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_catComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_catRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_cat' ---
    for (const thisComponent of instructions_catComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instructions_cat_resp.stop();
    // the Routine "instructions_cat" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var category_test_textComponents;
function category_test_textRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'category_test_text' ---
    t = 0;
    category_test_textClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    category_test_textComponents = [];
    category_test_textComponents.push(category_test_word);
    
    for (const thisComponent of category_test_textComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function category_test_textRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'category_test_text' ---
    // get current time
    t = category_test_textClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *category_test_word* updates
    if (t >= 0.5 && category_test_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      category_test_word.tStart = t;  // (not accounting for frame time here)
      category_test_word.frameNStart = frameN;  // exact frame index
      
      category_test_word.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (category_test_word.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      category_test_word.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of category_test_textComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function category_test_textRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'category_test_text' ---
    for (const thisComponent of category_test_textComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cat_training_trials;
function cat_training_trialsLoopBegin(cat_training_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    cat_training_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_cat_training.xlsx',
      seed: undefined, name: 'cat_training_trials'
    });
    psychoJS.experiment.addLoop(cat_training_trials); // add the loop to the experiment
    currentLoop = cat_training_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCat_training_trial of cat_training_trials) {
      snapshot = cat_training_trials.getSnapshot();
      cat_training_trialsLoopScheduler.add(importConditions(snapshot));
      cat_training_trialsLoopScheduler.add(fix_categorization_trainingRoutineBegin(snapshot));
      cat_training_trialsLoopScheduler.add(fix_categorization_trainingRoutineEachFrame());
      cat_training_trialsLoopScheduler.add(fix_categorization_trainingRoutineEnd(snapshot));
      cat_training_trialsLoopScheduler.add(categorization_trainingRoutineBegin(snapshot));
      cat_training_trialsLoopScheduler.add(categorization_trainingRoutineEachFrame());
      cat_training_trialsLoopScheduler.add(categorization_trainingRoutineEnd(snapshot));
      cat_training_trialsLoopScheduler.add(cat_training_feedbackRoutineBegin(snapshot));
      cat_training_trialsLoopScheduler.add(cat_training_feedbackRoutineEachFrame());
      cat_training_trialsLoopScheduler.add(cat_training_feedbackRoutineEnd(snapshot));
      cat_training_trialsLoopScheduler.add(cat_training_trialsLoopEndIteration(cat_training_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function cat_training_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(cat_training_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function cat_training_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var categorization_trials;
function categorization_trialsLoopBegin(categorization_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    categorization_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_block_order,
      seed: undefined, name: 'categorization_trials'
    });
    psychoJS.experiment.addLoop(categorization_trials); // add the loop to the experiment
    currentLoop = categorization_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCategorization_trial of categorization_trials) {
      snapshot = categorization_trials.getSnapshot();
      categorization_trialsLoopScheduler.add(importConditions(snapshot));
      const kitchen_a_categorization_trialsLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(kitchen_a_categorization_trialsLoopBegin(kitchen_a_categorization_trialsLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(kitchen_a_categorization_trialsLoopScheduler);
      categorization_trialsLoopScheduler.add(kitchen_a_categorization_trialsLoopEnd);
      const kitchen_b_categorization_trialsLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(kitchen_b_categorization_trialsLoopBegin(kitchen_b_categorization_trialsLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(kitchen_b_categorization_trialsLoopScheduler);
      categorization_trialsLoopScheduler.add(kitchen_b_categorization_trialsLoopEnd);
      const living_a_categorization_trialsLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(living_a_categorization_trialsLoopBegin(living_a_categorization_trialsLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(living_a_categorization_trialsLoopScheduler);
      categorization_trialsLoopScheduler.add(living_a_categorization_trialsLoopEnd);
      const living_b_categorization_trialsLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(living_b_categorization_trialsLoopBegin(living_b_categorization_trialsLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(living_b_categorization_trialsLoopScheduler);
      categorization_trialsLoopScheduler.add(living_b_categorization_trialsLoopEnd);
      const bed_a_categorization_trialsLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(bed_a_categorization_trialsLoopBegin(bed_a_categorization_trialsLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(bed_a_categorization_trialsLoopScheduler);
      categorization_trialsLoopScheduler.add(bed_a_categorization_trialsLoopEnd);
      const bed_b_categorization_trialsLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(bed_b_categorization_trialsLoopBegin(bed_b_categorization_trialsLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(bed_b_categorization_trialsLoopScheduler);
      categorization_trialsLoopScheduler.add(bed_b_categorization_trialsLoopEnd);
      categorization_trialsLoopScheduler.add(categorization_trialsLoopEndIteration(categorization_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var kitchen_a_categorization_trials;
function kitchen_a_categorization_trialsLoopBegin(kitchen_a_categorization_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    kitchen_a_categorization_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: kitchen_1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_kitchen_a,
      seed: undefined, name: 'kitchen_a_categorization_trials'
    });
    psychoJS.experiment.addLoop(kitchen_a_categorization_trials); // add the loop to the experiment
    currentLoop = kitchen_a_categorization_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisKitchen_a_categorization_trial of kitchen_a_categorization_trials) {
      snapshot = kitchen_a_categorization_trials.getSnapshot();
      kitchen_a_categorization_trialsLoopScheduler.add(importConditions(snapshot));
      kitchen_a_categorization_trialsLoopScheduler.add(kitchen_aRoutineBegin(snapshot));
      kitchen_a_categorization_trialsLoopScheduler.add(kitchen_aRoutineEachFrame());
      kitchen_a_categorization_trialsLoopScheduler.add(kitchen_aRoutineEnd(snapshot));
      kitchen_a_categorization_trialsLoopScheduler.add(kitchen_random_isiRoutineBegin(snapshot));
      kitchen_a_categorization_trialsLoopScheduler.add(kitchen_random_isiRoutineEachFrame());
      kitchen_a_categorization_trialsLoopScheduler.add(kitchen_random_isiRoutineEnd(snapshot));
      kitchen_a_categorization_trialsLoopScheduler.add(kitchen_pictureRoutineBegin(snapshot));
      kitchen_a_categorization_trialsLoopScheduler.add(kitchen_pictureRoutineEachFrame());
      kitchen_a_categorization_trialsLoopScheduler.add(kitchen_pictureRoutineEnd(snapshot));
      kitchen_a_categorization_trialsLoopScheduler.add(kitchen_a_categorization_trialsLoopEndIteration(kitchen_a_categorization_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function kitchen_a_categorization_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(kitchen_a_categorization_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function kitchen_a_categorization_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var kitchen_b_categorization_trials;
function kitchen_b_categorization_trialsLoopBegin(kitchen_b_categorization_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    kitchen_b_categorization_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: kitchen_2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_kitchen_b,
      seed: undefined, name: 'kitchen_b_categorization_trials'
    });
    psychoJS.experiment.addLoop(kitchen_b_categorization_trials); // add the loop to the experiment
    currentLoop = kitchen_b_categorization_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisKitchen_b_categorization_trial of kitchen_b_categorization_trials) {
      snapshot = kitchen_b_categorization_trials.getSnapshot();
      kitchen_b_categorization_trialsLoopScheduler.add(importConditions(snapshot));
      kitchen_b_categorization_trialsLoopScheduler.add(kitchen_bRoutineBegin(snapshot));
      kitchen_b_categorization_trialsLoopScheduler.add(kitchen_bRoutineEachFrame());
      kitchen_b_categorization_trialsLoopScheduler.add(kitchen_bRoutineEnd(snapshot));
      kitchen_b_categorization_trialsLoopScheduler.add(kitchen_random_isiRoutineBegin(snapshot));
      kitchen_b_categorization_trialsLoopScheduler.add(kitchen_random_isiRoutineEachFrame());
      kitchen_b_categorization_trialsLoopScheduler.add(kitchen_random_isiRoutineEnd(snapshot));
      kitchen_b_categorization_trialsLoopScheduler.add(kitchen_pictureRoutineBegin(snapshot));
      kitchen_b_categorization_trialsLoopScheduler.add(kitchen_pictureRoutineEachFrame());
      kitchen_b_categorization_trialsLoopScheduler.add(kitchen_pictureRoutineEnd(snapshot));
      kitchen_b_categorization_trialsLoopScheduler.add(kitchen_b_categorization_trialsLoopEndIteration(kitchen_b_categorization_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function kitchen_b_categorization_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(kitchen_b_categorization_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function kitchen_b_categorization_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var living_a_categorization_trials;
function living_a_categorization_trialsLoopBegin(living_a_categorization_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    living_a_categorization_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: living_room_1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_living_a,
      seed: undefined, name: 'living_a_categorization_trials'
    });
    psychoJS.experiment.addLoop(living_a_categorization_trials); // add the loop to the experiment
    currentLoop = living_a_categorization_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLiving_a_categorization_trial of living_a_categorization_trials) {
      snapshot = living_a_categorization_trials.getSnapshot();
      living_a_categorization_trialsLoopScheduler.add(importConditions(snapshot));
      living_a_categorization_trialsLoopScheduler.add(living_aRoutineBegin(snapshot));
      living_a_categorization_trialsLoopScheduler.add(living_aRoutineEachFrame());
      living_a_categorization_trialsLoopScheduler.add(living_aRoutineEnd(snapshot));
      living_a_categorization_trialsLoopScheduler.add(living_random_isiRoutineBegin(snapshot));
      living_a_categorization_trialsLoopScheduler.add(living_random_isiRoutineEachFrame());
      living_a_categorization_trialsLoopScheduler.add(living_random_isiRoutineEnd(snapshot));
      living_a_categorization_trialsLoopScheduler.add(living_pictureRoutineBegin(snapshot));
      living_a_categorization_trialsLoopScheduler.add(living_pictureRoutineEachFrame());
      living_a_categorization_trialsLoopScheduler.add(living_pictureRoutineEnd(snapshot));
      living_a_categorization_trialsLoopScheduler.add(living_a_categorization_trialsLoopEndIteration(living_a_categorization_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function living_a_categorization_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(living_a_categorization_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function living_a_categorization_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var living_b_categorization_trials;
function living_b_categorization_trialsLoopBegin(living_b_categorization_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    living_b_categorization_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: living_room_2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_living_b,
      seed: undefined, name: 'living_b_categorization_trials'
    });
    psychoJS.experiment.addLoop(living_b_categorization_trials); // add the loop to the experiment
    currentLoop = living_b_categorization_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLiving_b_categorization_trial of living_b_categorization_trials) {
      snapshot = living_b_categorization_trials.getSnapshot();
      living_b_categorization_trialsLoopScheduler.add(importConditions(snapshot));
      living_b_categorization_trialsLoopScheduler.add(living_bRoutineBegin(snapshot));
      living_b_categorization_trialsLoopScheduler.add(living_bRoutineEachFrame());
      living_b_categorization_trialsLoopScheduler.add(living_bRoutineEnd(snapshot));
      living_b_categorization_trialsLoopScheduler.add(living_random_isiRoutineBegin(snapshot));
      living_b_categorization_trialsLoopScheduler.add(living_random_isiRoutineEachFrame());
      living_b_categorization_trialsLoopScheduler.add(living_random_isiRoutineEnd(snapshot));
      living_b_categorization_trialsLoopScheduler.add(living_pictureRoutineBegin(snapshot));
      living_b_categorization_trialsLoopScheduler.add(living_pictureRoutineEachFrame());
      living_b_categorization_trialsLoopScheduler.add(living_pictureRoutineEnd(snapshot));
      living_b_categorization_trialsLoopScheduler.add(living_b_categorization_trialsLoopEndIteration(living_b_categorization_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function living_b_categorization_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(living_b_categorization_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function living_b_categorization_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var bed_a_categorization_trials;
function bed_a_categorization_trialsLoopBegin(bed_a_categorization_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    bed_a_categorization_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: bedroom_1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_sleep_a,
      seed: undefined, name: 'bed_a_categorization_trials'
    });
    psychoJS.experiment.addLoop(bed_a_categorization_trials); // add the loop to the experiment
    currentLoop = bed_a_categorization_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBed_a_categorization_trial of bed_a_categorization_trials) {
      snapshot = bed_a_categorization_trials.getSnapshot();
      bed_a_categorization_trialsLoopScheduler.add(importConditions(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(sleep_aRoutineBegin(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(sleep_aRoutineEachFrame());
      bed_a_categorization_trialsLoopScheduler.add(sleep_aRoutineEnd(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(sleep_random_isiRoutineBegin(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(sleep_random_isiRoutineEachFrame());
      bed_a_categorization_trialsLoopScheduler.add(sleep_random_isiRoutineEnd(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(sleep_pictureRoutineBegin(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(sleep_pictureRoutineEachFrame());
      bed_a_categorization_trialsLoopScheduler.add(sleep_pictureRoutineEnd(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(bed_a_categorization_trialsLoopEndIteration(bed_a_categorization_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function bed_a_categorization_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(bed_a_categorization_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function bed_a_categorization_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var bed_b_categorization_trials;
function bed_b_categorization_trialsLoopBegin(bed_b_categorization_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    bed_b_categorization_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: bedroom_2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_sleep_b,
      seed: undefined, name: 'bed_b_categorization_trials'
    });
    psychoJS.experiment.addLoop(bed_b_categorization_trials); // add the loop to the experiment
    currentLoop = bed_b_categorization_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBed_b_categorization_trial of bed_b_categorization_trials) {
      snapshot = bed_b_categorization_trials.getSnapshot();
      bed_b_categorization_trialsLoopScheduler.add(importConditions(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(sleep_bRoutineBegin(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(sleep_bRoutineEachFrame());
      bed_b_categorization_trialsLoopScheduler.add(sleep_bRoutineEnd(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(sleep_random_isiRoutineBegin(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(sleep_random_isiRoutineEachFrame());
      bed_b_categorization_trialsLoopScheduler.add(sleep_random_isiRoutineEnd(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(sleep_pictureRoutineBegin(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(sleep_pictureRoutineEachFrame());
      bed_b_categorization_trialsLoopScheduler.add(sleep_pictureRoutineEnd(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(bed_b_categorization_trialsLoopEndIteration(bed_b_categorization_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function bed_b_categorization_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(bed_b_categorization_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function bed_b_categorization_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function categorization_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(categorization_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function categorization_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var memo_training_trials;
function memo_training_trialsLoopBegin(memo_training_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    memo_training_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_memo_training.xlsx',
      seed: undefined, name: 'memo_training_trials'
    });
    psychoJS.experiment.addLoop(memo_training_trials); // add the loop to the experiment
    currentLoop = memo_training_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMemo_training_trial of memo_training_trials) {
      snapshot = memo_training_trials.getSnapshot();
      memo_training_trialsLoopScheduler.add(importConditions(snapshot));
      memo_training_trialsLoopScheduler.add(memo_fix_isiRoutineBegin(snapshot));
      memo_training_trialsLoopScheduler.add(memo_fix_isiRoutineEachFrame());
      memo_training_trialsLoopScheduler.add(memo_fix_isiRoutineEnd(snapshot));
      memo_training_trialsLoopScheduler.add(memo_trainingRoutineBegin(snapshot));
      memo_training_trialsLoopScheduler.add(memo_trainingRoutineEachFrame());
      memo_training_trialsLoopScheduler.add(memo_trainingRoutineEnd(snapshot));
      memo_training_trialsLoopScheduler.add(memo_training_feedbackRoutineBegin(snapshot));
      memo_training_trialsLoopScheduler.add(memo_training_feedbackRoutineEachFrame());
      memo_training_trialsLoopScheduler.add(memo_training_feedbackRoutineEnd(snapshot));
      memo_training_trialsLoopScheduler.add(memo_training_trialsLoopEndIteration(memo_training_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function memo_training_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(memo_training_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function memo_training_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var memotest_trials;
function memotest_trialsLoopBegin(memotest_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    memotest_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_memo_test,
      seed: undefined, name: 'memotest_trials'
    });
    psychoJS.experiment.addLoop(memotest_trials); // add the loop to the experiment
    currentLoop = memotest_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMemotest_trial of memotest_trials) {
      snapshot = memotest_trials.getSnapshot();
      memotest_trialsLoopScheduler.add(importConditions(snapshot));
      memotest_trialsLoopScheduler.add(memo_fix_isiRoutineBegin(snapshot));
      memotest_trialsLoopScheduler.add(memo_fix_isiRoutineEachFrame());
      memotest_trialsLoopScheduler.add(memo_fix_isiRoutineEnd(snapshot));
      memotest_trialsLoopScheduler.add(memotest_taskRoutineBegin(snapshot));
      memotest_trialsLoopScheduler.add(memotest_taskRoutineEachFrame());
      memotest_trialsLoopScheduler.add(memotest_taskRoutineEnd(snapshot));
      memotest_trialsLoopScheduler.add(memotest_trialsLoopEndIteration(memotest_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function memotest_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(memotest_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function memotest_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var time;
var fix_categorization_trainingComponents;
function fix_categorization_trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix_categorization_training' ---
    t = 0;
    fix_categorization_trainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from random_isi_code_cat_training
    time = 1 + Math.random();
    // keep track of which components have finished
    fix_categorization_trainingComponents = [];
    fix_categorization_trainingComponents.push(fix_cat_training_question);
    fix_categorization_trainingComponents.push(fix_cat_training_yes);
    fix_categorization_trainingComponents.push(fix_cat_training_no);
    fix_categorization_trainingComponents.push(fix_cat_training_pic);
    
    for (const thisComponent of fix_categorization_trainingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fix_categorization_trainingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix_categorization_training' ---
    // get current time
    t = fix_categorization_trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cat_training_question* updates
    if (t >= 0.0 && fix_cat_training_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cat_training_question.tStart = t;  // (not accounting for frame time here)
      fix_cat_training_question.frameNStart = frameN;  // exact frame index
      
      fix_cat_training_question.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cat_training_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cat_training_question.setAutoDraw(false);
    }
    
    // *fix_cat_training_yes* updates
    if (t >= 0.0 && fix_cat_training_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cat_training_yes.tStart = t;  // (not accounting for frame time here)
      fix_cat_training_yes.frameNStart = frameN;  // exact frame index
      
      fix_cat_training_yes.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cat_training_yes.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cat_training_yes.setAutoDraw(false);
    }
    
    // *fix_cat_training_no* updates
    if (t >= 0.0 && fix_cat_training_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cat_training_no.tStart = t;  // (not accounting for frame time here)
      fix_cat_training_no.frameNStart = frameN;  // exact frame index
      
      fix_cat_training_no.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cat_training_no.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cat_training_no.setAutoDraw(false);
    }
    
    // *fix_cat_training_pic* updates
    if (t >= 0.0 && fix_cat_training_pic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cat_training_pic.tStart = t;  // (not accounting for frame time here)
      fix_cat_training_pic.frameNStart = frameN;  // exact frame index
      
      fix_cat_training_pic.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cat_training_pic.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cat_training_pic.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fix_categorization_trainingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix_categorization_trainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix_categorization_training' ---
    for (const thisComponent of fix_categorization_trainingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "fix_categorization_training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _cat_training_key_allKeys;
var categorization_trainingComponents;
function categorization_trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'categorization_training' ---
    t = 0;
    categorization_trainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    cat_training_stim.setImage(stimulus);
    cat_training_key.keys = undefined;
    cat_training_key.rt = undefined;
    _cat_training_key_allKeys = [];
    // keep track of which components have finished
    categorization_trainingComponents = [];
    categorization_trainingComponents.push(cat_training_fix);
    categorization_trainingComponents.push(cat_training_stim);
    categorization_trainingComponents.push(cat_training_key);
    categorization_trainingComponents.push(cat_training_question);
    categorization_trainingComponents.push(cat_training_yes);
    categorization_trainingComponents.push(cat_training_no);
    
    for (const thisComponent of categorization_trainingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function categorization_trainingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'categorization_training' ---
    // get current time
    t = categorization_trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cat_training_fix* updates
    if (t >= 0.75 && cat_training_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_training_fix.tStart = t;  // (not accounting for frame time here)
      cat_training_fix.frameNStart = frameN;  // exact frame index
      
      cat_training_fix.setAutoDraw(true);
    }
    
    
    // *cat_training_stim* updates
    if (t >= 0.0 && cat_training_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_training_stim.tStart = t;  // (not accounting for frame time here)
      cat_training_stim.frameNStart = frameN;  // exact frame index
      
      cat_training_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cat_training_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cat_training_stim.setAutoDraw(false);
    }
    
    // *cat_training_key* updates
    if (t >= 0.25 && cat_training_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_training_key.tStart = t;  // (not accounting for frame time here)
      cat_training_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { cat_training_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { cat_training_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { cat_training_key.clearEvents(); });
    }
    
    if (cat_training_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = cat_training_key.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _cat_training_key_allKeys = _cat_training_key_allKeys.concat(theseKeys);
      if (_cat_training_key_allKeys.length > 0) {
        cat_training_key.keys = _cat_training_key_allKeys[_cat_training_key_allKeys.length - 1].name;  // just the last key pressed
        cat_training_key.rt = _cat_training_key_allKeys[_cat_training_key_allKeys.length - 1].rt;
        cat_training_key.duration = _cat_training_key_allKeys[_cat_training_key_allKeys.length - 1].duration;
        // was this correct?
        if (cat_training_key.keys == correct_answer) {
            cat_training_key.corr = 1;
        } else {
            cat_training_key.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *cat_training_question* updates
    if (t >= 0.0 && cat_training_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_training_question.tStart = t;  // (not accounting for frame time here)
      cat_training_question.frameNStart = frameN;  // exact frame index
      
      cat_training_question.setAutoDraw(true);
    }
    
    
    // *cat_training_yes* updates
    if (t >= 0.0 && cat_training_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_training_yes.tStart = t;  // (not accounting for frame time here)
      cat_training_yes.frameNStart = frameN;  // exact frame index
      
      cat_training_yes.setAutoDraw(true);
    }
    
    
    // *cat_training_no* updates
    if (t >= 0.0 && cat_training_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_training_no.tStart = t;  // (not accounting for frame time here)
      cat_training_no.frameNStart = frameN;  // exact frame index
      
      cat_training_no.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of categorization_trainingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function categorization_trainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'categorization_training' ---
    for (const thisComponent of categorization_trainingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (cat_training_key.keys === undefined) {
      if (['None','none',undefined].includes(correct_answer)) {
         cat_training_key.corr = 1;  // correct non-response
      } else {
         cat_training_key.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(cat_training_key.corr, level);
    }
    psychoJS.experiment.addData('cat_training_key.keys', cat_training_key.keys);
    psychoJS.experiment.addData('cat_training_key.corr', cat_training_key.corr);
    if (typeof cat_training_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('cat_training_key.rt', cat_training_key.rt);
        psychoJS.experiment.addData('cat_training_key.duration', cat_training_key.duration);
        routineTimer.reset();
        }
    
    cat_training_key.stop();
    // the Routine "categorization_training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cat_training_feedb_eval;
var cat_training_feedbackComponents;
function cat_training_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cat_training_feedback' ---
    t = 0;
    cat_training_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from cat_train_feedb_code
    if ((cat_training_key.corr === 1)) {
        cat_training_feedb_eval = "korrekt";
    } else {
        cat_training_feedb_eval = "falsch";
    }
    
    cat_train_feedback_text.setText(cat_training_feedb_eval);
    // keep track of which components have finished
    cat_training_feedbackComponents = [];
    cat_training_feedbackComponents.push(cat_train_feedback_text);
    cat_training_feedbackComponents.push(cat_train_feedb_yes);
    cat_training_feedbackComponents.push(cat_train_feedb_no);
    cat_training_feedbackComponents.push(cat_train_feedb_question);
    
    for (const thisComponent of cat_training_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function cat_training_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cat_training_feedback' ---
    // get current time
    t = cat_training_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cat_train_feedback_text* updates
    if (t >= 0.5 && cat_train_feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_train_feedback_text.tStart = t;  // (not accounting for frame time here)
      cat_train_feedback_text.frameNStart = frameN;  // exact frame index
      
      cat_train_feedback_text.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cat_train_feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cat_train_feedback_text.setAutoDraw(false);
    }
    
    // *cat_train_feedb_yes* updates
    if (t >= 0.0 && cat_train_feedb_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_train_feedb_yes.tStart = t;  // (not accounting for frame time here)
      cat_train_feedb_yes.frameNStart = frameN;  // exact frame index
      
      cat_train_feedb_yes.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cat_train_feedb_yes.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cat_train_feedb_yes.setAutoDraw(false);
    }
    
    // *cat_train_feedb_no* updates
    if (t >= 0.0 && cat_train_feedb_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_train_feedb_no.tStart = t;  // (not accounting for frame time here)
      cat_train_feedb_no.frameNStart = frameN;  // exact frame index
      
      cat_train_feedb_no.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cat_train_feedb_no.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cat_train_feedb_no.setAutoDraw(false);
    }
    
    // *cat_train_feedb_question* updates
    if (t >= 0.0 && cat_train_feedb_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_train_feedb_question.tStart = t;  // (not accounting for frame time here)
      cat_train_feedb_question.frameNStart = frameN;  // exact frame index
      
      cat_train_feedb_question.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cat_train_feedb_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cat_train_feedb_question.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cat_training_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cat_training_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cat_training_feedback' ---
    for (const thisComponent of cat_training_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _start_cat_resp_allKeys;
var start_categorizationComponents;
function start_categorizationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_categorization' ---
    t = 0;
    start_categorizationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    start_cat_resp.keys = undefined;
    start_cat_resp.rt = undefined;
    _start_cat_resp_allKeys = [];
    // keep track of which components have finished
    start_categorizationComponents = [];
    start_categorizationComponents.push(start_cat_text);
    start_categorizationComponents.push(start_cat_resp);
    
    for (const thisComponent of start_categorizationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_categorizationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_categorization' ---
    // get current time
    t = start_categorizationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_cat_text* updates
    if (t >= 0.5 && start_cat_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_cat_text.tStart = t;  // (not accounting for frame time here)
      start_cat_text.frameNStart = frameN;  // exact frame index
      
      start_cat_text.setAutoDraw(true);
    }
    
    
    // *start_cat_resp* updates
    if (t >= 0.5 && start_cat_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_cat_resp.tStart = t;  // (not accounting for frame time here)
      start_cat_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_cat_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_cat_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_cat_resp.clearEvents(); });
    }
    
    if (start_cat_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_cat_resp.getKeys({keyList: ['space'], waitRelease: false});
      _start_cat_resp_allKeys = _start_cat_resp_allKeys.concat(theseKeys);
      if (_start_cat_resp_allKeys.length > 0) {
        start_cat_resp.keys = _start_cat_resp_allKeys[_start_cat_resp_allKeys.length - 1].name;  // just the last key pressed
        start_cat_resp.rt = _start_cat_resp_allKeys[_start_cat_resp_allKeys.length - 1].rt;
        start_cat_resp.duration = _start_cat_resp_allKeys[_start_cat_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_categorizationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_categorizationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_categorization' ---
    for (const thisComponent of start_categorizationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    start_cat_resp.stop();
    // the Routine "start_categorization" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _kitchen_a_resp_allKeys;
var kitchen_aComponents;
function kitchen_aRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'kitchen_a' ---
    t = 0;
    kitchen_aClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((kitchen_a_categorization_trials.thisN > 0));
    kitchen_a_resp.keys = undefined;
    kitchen_a_resp.rt = undefined;
    _kitchen_a_resp_allKeys = [];
    kitchen_a_block_no.setText(block_total_cat);
    // keep track of which components have finished
    kitchen_aComponents = [];
    kitchen_aComponents.push(kitchen_a_text);
    kitchen_aComponents.push(kitchen_a_text_2);
    kitchen_aComponents.push(kitchen_a_resp);
    kitchen_aComponents.push(kitchen_a_block_no);
    
    for (const thisComponent of kitchen_aComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function kitchen_aRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'kitchen_a' ---
    // get current time
    t = kitchen_aClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *kitchen_a_text* updates
    if (t >= 0.5 && kitchen_a_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_a_text.tStart = t;  // (not accounting for frame time here)
      kitchen_a_text.frameNStart = frameN;  // exact frame index
      
      kitchen_a_text.setAutoDraw(true);
    }
    
    
    // *kitchen_a_text_2* updates
    if (t >= 0.5 && kitchen_a_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_a_text_2.tStart = t;  // (not accounting for frame time here)
      kitchen_a_text_2.frameNStart = frameN;  // exact frame index
      
      kitchen_a_text_2.setAutoDraw(true);
    }
    
    
    // *kitchen_a_resp* updates
    if (t >= 1 && kitchen_a_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_a_resp.tStart = t;  // (not accounting for frame time here)
      kitchen_a_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { kitchen_a_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { kitchen_a_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { kitchen_a_resp.clearEvents(); });
    }
    
    if (kitchen_a_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = kitchen_a_resp.getKeys({keyList: ['space'], waitRelease: false});
      _kitchen_a_resp_allKeys = _kitchen_a_resp_allKeys.concat(theseKeys);
      if (_kitchen_a_resp_allKeys.length > 0) {
        kitchen_a_resp.keys = _kitchen_a_resp_allKeys[_kitchen_a_resp_allKeys.length - 1].name;  // just the last key pressed
        kitchen_a_resp.rt = _kitchen_a_resp_allKeys[_kitchen_a_resp_allKeys.length - 1].rt;
        kitchen_a_resp.duration = _kitchen_a_resp_allKeys[_kitchen_a_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *kitchen_a_block_no* updates
    if (t >= 0.5 && kitchen_a_block_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_a_block_no.tStart = t;  // (not accounting for frame time here)
      kitchen_a_block_no.frameNStart = frameN;  // exact frame index
      
      kitchen_a_block_no.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of kitchen_aComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function kitchen_aRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'kitchen_a' ---
    for (const thisComponent of kitchen_aComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    kitchen_a_resp.stop();
    // the Routine "kitchen_a" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var kitchen_random_isiComponents;
function kitchen_random_isiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'kitchen_random_isi' ---
    t = 0;
    kitchen_random_isiClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from random_isi_kitchen_code
    time = 1 + Math.random();
    
    // keep track of which components have finished
    kitchen_random_isiComponents = [];
    kitchen_random_isiComponents.push(random_isi_kitchen_fix);
    kitchen_random_isiComponents.push(random_isi_kitchen_yes);
    kitchen_random_isiComponents.push(random_isi_kitchen_no);
    kitchen_random_isiComponents.push(random_isi_kitchen_question);
    
    for (const thisComponent of kitchen_random_isiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function kitchen_random_isiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'kitchen_random_isi' ---
    // get current time
    t = kitchen_random_isiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *random_isi_kitchen_fix* updates
    if (t >= 0.0 && random_isi_kitchen_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      random_isi_kitchen_fix.tStart = t;  // (not accounting for frame time here)
      random_isi_kitchen_fix.frameNStart = frameN;  // exact frame index
      
      random_isi_kitchen_fix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (random_isi_kitchen_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      random_isi_kitchen_fix.setAutoDraw(false);
    }
    
    // *random_isi_kitchen_yes* updates
    if (t >= 0.0 && random_isi_kitchen_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      random_isi_kitchen_yes.tStart = t;  // (not accounting for frame time here)
      random_isi_kitchen_yes.frameNStart = frameN;  // exact frame index
      
      random_isi_kitchen_yes.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (random_isi_kitchen_yes.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      random_isi_kitchen_yes.setAutoDraw(false);
    }
    
    // *random_isi_kitchen_no* updates
    if (t >= 0.0 && random_isi_kitchen_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      random_isi_kitchen_no.tStart = t;  // (not accounting for frame time here)
      random_isi_kitchen_no.frameNStart = frameN;  // exact frame index
      
      random_isi_kitchen_no.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (random_isi_kitchen_no.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      random_isi_kitchen_no.setAutoDraw(false);
    }
    
    // *random_isi_kitchen_question* updates
    if (t >= 0.0 && random_isi_kitchen_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      random_isi_kitchen_question.tStart = t;  // (not accounting for frame time here)
      random_isi_kitchen_question.frameNStart = frameN;  // exact frame index
      
      random_isi_kitchen_question.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (random_isi_kitchen_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      random_isi_kitchen_question.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of kitchen_random_isiComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function kitchen_random_isiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'kitchen_random_isi' ---
    for (const thisComponent of kitchen_random_isiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "kitchen_random_isi" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _kitchen_picture_resp_allKeys;
var kitchen_pictureComponents;
function kitchen_pictureRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'kitchen_picture' ---
    t = 0;
    kitchen_pictureClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    kitchen_image.setImage(stimulus);
    kitchen_picture_resp.keys = undefined;
    kitchen_picture_resp.rt = undefined;
    _kitchen_picture_resp_allKeys = [];
    // keep track of which components have finished
    kitchen_pictureComponents = [];
    kitchen_pictureComponents.push(kitchen_fix);
    kitchen_pictureComponents.push(kitchen_image);
    kitchen_pictureComponents.push(kitchen_picture_yes);
    kitchen_pictureComponents.push(kitchen_picture_no);
    kitchen_pictureComponents.push(kitchen_picture_question);
    kitchen_pictureComponents.push(kitchen_picture_resp);
    
    for (const thisComponent of kitchen_pictureComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function kitchen_pictureRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'kitchen_picture' ---
    // get current time
    t = kitchen_pictureClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *kitchen_fix* updates
    if (t >= 0.0 && kitchen_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_fix.tStart = t;  // (not accounting for frame time here)
      kitchen_fix.frameNStart = frameN;  // exact frame index
      
      kitchen_fix.setAutoDraw(true);
    }
    
    
    // *kitchen_image* updates
    if (t >= 0.0 && kitchen_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_image.tStart = t;  // (not accounting for frame time here)
      kitchen_image.frameNStart = frameN;  // exact frame index
      
      kitchen_image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (kitchen_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      kitchen_image.setAutoDraw(false);
    }
    
    // *kitchen_picture_yes* updates
    if (t >= 0.0 && kitchen_picture_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_picture_yes.tStart = t;  // (not accounting for frame time here)
      kitchen_picture_yes.frameNStart = frameN;  // exact frame index
      
      kitchen_picture_yes.setAutoDraw(true);
    }
    
    
    // *kitchen_picture_no* updates
    if (t >= 0.0 && kitchen_picture_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_picture_no.tStart = t;  // (not accounting for frame time here)
      kitchen_picture_no.frameNStart = frameN;  // exact frame index
      
      kitchen_picture_no.setAutoDraw(true);
    }
    
    
    // *kitchen_picture_question* updates
    if (t >= 0.0 && kitchen_picture_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_picture_question.tStart = t;  // (not accounting for frame time here)
      kitchen_picture_question.frameNStart = frameN;  // exact frame index
      
      kitchen_picture_question.setAutoDraw(true);
    }
    
    
    // *kitchen_picture_resp* updates
    if (t >= 0.35 && kitchen_picture_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_picture_resp.tStart = t;  // (not accounting for frame time here)
      kitchen_picture_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { kitchen_picture_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { kitchen_picture_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { kitchen_picture_resp.clearEvents(); });
    }
    
    if (kitchen_picture_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = kitchen_picture_resp.getKeys({keyList: ['j', 'f'], waitRelease: false});
      _kitchen_picture_resp_allKeys = _kitchen_picture_resp_allKeys.concat(theseKeys);
      if (_kitchen_picture_resp_allKeys.length > 0) {
        kitchen_picture_resp.keys = _kitchen_picture_resp_allKeys[_kitchen_picture_resp_allKeys.length - 1].name;  // just the last key pressed
        kitchen_picture_resp.rt = _kitchen_picture_resp_allKeys[_kitchen_picture_resp_allKeys.length - 1].rt;
        kitchen_picture_resp.duration = _kitchen_picture_resp_allKeys[_kitchen_picture_resp_allKeys.length - 1].duration;
        // was this correct?
        if (kitchen_picture_resp.keys == correct_answer) {
            kitchen_picture_resp.corr = 1;
        } else {
            kitchen_picture_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of kitchen_pictureComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function kitchen_pictureRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'kitchen_picture' ---
    for (const thisComponent of kitchen_pictureComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (kitchen_picture_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct_answer)) {
         kitchen_picture_resp.corr = 1;  // correct non-response
      } else {
         kitchen_picture_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(kitchen_picture_resp.corr, level);
    }
    psychoJS.experiment.addData('kitchen_picture_resp.keys', kitchen_picture_resp.keys);
    psychoJS.experiment.addData('kitchen_picture_resp.corr', kitchen_picture_resp.corr);
    if (typeof kitchen_picture_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('kitchen_picture_resp.rt', kitchen_picture_resp.rt);
        psychoJS.experiment.addData('kitchen_picture_resp.duration', kitchen_picture_resp.duration);
        routineTimer.reset();
        }
    
    kitchen_picture_resp.stop();
    // the Routine "kitchen_picture" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _kitchen_b_resp_allKeys;
var kitchen_bComponents;
function kitchen_bRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'kitchen_b' ---
    t = 0;
    kitchen_bClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((kitchen_b_categorization_trials.thisN > 0));
    kitchen_b_resp.keys = undefined;
    kitchen_b_resp.rt = undefined;
    _kitchen_b_resp_allKeys = [];
    kitchen_b_block_no.setText(block_total_cat);
    // keep track of which components have finished
    kitchen_bComponents = [];
    kitchen_bComponents.push(kitchen_b_text);
    kitchen_bComponents.push(kitchen_b_text_2);
    kitchen_bComponents.push(kitchen_b_resp);
    kitchen_bComponents.push(kitchen_b_block_no);
    
    for (const thisComponent of kitchen_bComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function kitchen_bRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'kitchen_b' ---
    // get current time
    t = kitchen_bClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *kitchen_b_text* updates
    if (t >= 0.5 && kitchen_b_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_b_text.tStart = t;  // (not accounting for frame time here)
      kitchen_b_text.frameNStart = frameN;  // exact frame index
      
      kitchen_b_text.setAutoDraw(true);
    }
    
    
    // *kitchen_b_text_2* updates
    if (t >= 0.5 && kitchen_b_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_b_text_2.tStart = t;  // (not accounting for frame time here)
      kitchen_b_text_2.frameNStart = frameN;  // exact frame index
      
      kitchen_b_text_2.setAutoDraw(true);
    }
    
    
    // *kitchen_b_resp* updates
    if (t >= 1 && kitchen_b_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_b_resp.tStart = t;  // (not accounting for frame time here)
      kitchen_b_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { kitchen_b_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { kitchen_b_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { kitchen_b_resp.clearEvents(); });
    }
    
    if (kitchen_b_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = kitchen_b_resp.getKeys({keyList: ['space'], waitRelease: false});
      _kitchen_b_resp_allKeys = _kitchen_b_resp_allKeys.concat(theseKeys);
      if (_kitchen_b_resp_allKeys.length > 0) {
        kitchen_b_resp.keys = _kitchen_b_resp_allKeys[_kitchen_b_resp_allKeys.length - 1].name;  // just the last key pressed
        kitchen_b_resp.rt = _kitchen_b_resp_allKeys[_kitchen_b_resp_allKeys.length - 1].rt;
        kitchen_b_resp.duration = _kitchen_b_resp_allKeys[_kitchen_b_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *kitchen_b_block_no* updates
    if (t >= 0.5 && kitchen_b_block_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_b_block_no.tStart = t;  // (not accounting for frame time here)
      kitchen_b_block_no.frameNStart = frameN;  // exact frame index
      
      kitchen_b_block_no.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of kitchen_bComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function kitchen_bRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'kitchen_b' ---
    for (const thisComponent of kitchen_bComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    kitchen_b_resp.stop();
    // the Routine "kitchen_b" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _living_a_resp_allKeys;
var living_aComponents;
function living_aRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'living_a' ---
    t = 0;
    living_aClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((living_a_categorization_trials.thisN > 0));
    living_a_resp.keys = undefined;
    living_a_resp.rt = undefined;
    _living_a_resp_allKeys = [];
    living_a_block_no.setText(block_total_cat);
    // keep track of which components have finished
    living_aComponents = [];
    living_aComponents.push(living_a_text);
    living_aComponents.push(living_a_text_2);
    living_aComponents.push(living_a_resp);
    living_aComponents.push(living_a_block_no);
    
    for (const thisComponent of living_aComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function living_aRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'living_a' ---
    // get current time
    t = living_aClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *living_a_text* updates
    if (t >= 0.5 && living_a_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_a_text.tStart = t;  // (not accounting for frame time here)
      living_a_text.frameNStart = frameN;  // exact frame index
      
      living_a_text.setAutoDraw(true);
    }
    
    
    // *living_a_text_2* updates
    if (t >= 0.5 && living_a_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_a_text_2.tStart = t;  // (not accounting for frame time here)
      living_a_text_2.frameNStart = frameN;  // exact frame index
      
      living_a_text_2.setAutoDraw(true);
    }
    
    
    // *living_a_resp* updates
    if (t >= 1 && living_a_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_a_resp.tStart = t;  // (not accounting for frame time here)
      living_a_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { living_a_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { living_a_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { living_a_resp.clearEvents(); });
    }
    
    if (living_a_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = living_a_resp.getKeys({keyList: ['space'], waitRelease: false});
      _living_a_resp_allKeys = _living_a_resp_allKeys.concat(theseKeys);
      if (_living_a_resp_allKeys.length > 0) {
        living_a_resp.keys = _living_a_resp_allKeys[_living_a_resp_allKeys.length - 1].name;  // just the last key pressed
        living_a_resp.rt = _living_a_resp_allKeys[_living_a_resp_allKeys.length - 1].rt;
        living_a_resp.duration = _living_a_resp_allKeys[_living_a_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *living_a_block_no* updates
    if (t >= 0.5 && living_a_block_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_a_block_no.tStart = t;  // (not accounting for frame time here)
      living_a_block_no.frameNStart = frameN;  // exact frame index
      
      living_a_block_no.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of living_aComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function living_aRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'living_a' ---
    for (const thisComponent of living_aComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    living_a_resp.stop();
    // the Routine "living_a" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var living_random_isiComponents;
function living_random_isiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'living_random_isi' ---
    t = 0;
    living_random_isiClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from living_random_isi_code
    time = 1 + Math.random();
    // keep track of which components have finished
    living_random_isiComponents = [];
    living_random_isiComponents.push(living_random_isi_fix);
    living_random_isiComponents.push(living_random_isi_yes);
    living_random_isiComponents.push(living_random_isi_no);
    living_random_isiComponents.push(living_random_isi_question);
    
    for (const thisComponent of living_random_isiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function living_random_isiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'living_random_isi' ---
    // get current time
    t = living_random_isiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *living_random_isi_fix* updates
    if (t >= 0.0 && living_random_isi_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_random_isi_fix.tStart = t;  // (not accounting for frame time here)
      living_random_isi_fix.frameNStart = frameN;  // exact frame index
      
      living_random_isi_fix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (living_random_isi_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      living_random_isi_fix.setAutoDraw(false);
    }
    
    // *living_random_isi_yes* updates
    if (t >= 0.0 && living_random_isi_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_random_isi_yes.tStart = t;  // (not accounting for frame time here)
      living_random_isi_yes.frameNStart = frameN;  // exact frame index
      
      living_random_isi_yes.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (living_random_isi_yes.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      living_random_isi_yes.setAutoDraw(false);
    }
    
    // *living_random_isi_no* updates
    if (t >= 0.0 && living_random_isi_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_random_isi_no.tStart = t;  // (not accounting for frame time here)
      living_random_isi_no.frameNStart = frameN;  // exact frame index
      
      living_random_isi_no.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (living_random_isi_no.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      living_random_isi_no.setAutoDraw(false);
    }
    
    // *living_random_isi_question* updates
    if (t >= 0.0 && living_random_isi_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_random_isi_question.tStart = t;  // (not accounting for frame time here)
      living_random_isi_question.frameNStart = frameN;  // exact frame index
      
      living_random_isi_question.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (living_random_isi_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      living_random_isi_question.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of living_random_isiComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function living_random_isiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'living_random_isi' ---
    for (const thisComponent of living_random_isiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "living_random_isi" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _living_picture_resp_allKeys;
var living_pictureComponents;
function living_pictureRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'living_picture' ---
    t = 0;
    living_pictureClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    living_picture_image.setImage(stimulus);
    living_picture_resp.keys = undefined;
    living_picture_resp.rt = undefined;
    _living_picture_resp_allKeys = [];
    // keep track of which components have finished
    living_pictureComponents = [];
    living_pictureComponents.push(living_picture_fix);
    living_pictureComponents.push(living_picture_image);
    living_pictureComponents.push(living_picture_yes);
    living_pictureComponents.push(living_picture_no);
    living_pictureComponents.push(living_picture_resp);
    living_pictureComponents.push(living_picture_question);
    
    for (const thisComponent of living_pictureComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function living_pictureRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'living_picture' ---
    // get current time
    t = living_pictureClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *living_picture_fix* updates
    if (t >= 0.0 && living_picture_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_picture_fix.tStart = t;  // (not accounting for frame time here)
      living_picture_fix.frameNStart = frameN;  // exact frame index
      
      living_picture_fix.setAutoDraw(true);
    }
    
    
    // *living_picture_image* updates
    if (t >= 0.0 && living_picture_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_picture_image.tStart = t;  // (not accounting for frame time here)
      living_picture_image.frameNStart = frameN;  // exact frame index
      
      living_picture_image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (living_picture_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      living_picture_image.setAutoDraw(false);
    }
    
    // *living_picture_yes* updates
    if (t >= 0.0 && living_picture_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_picture_yes.tStart = t;  // (not accounting for frame time here)
      living_picture_yes.frameNStart = frameN;  // exact frame index
      
      living_picture_yes.setAutoDraw(true);
    }
    
    
    // *living_picture_no* updates
    if (t >= 0.0 && living_picture_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_picture_no.tStart = t;  // (not accounting for frame time here)
      living_picture_no.frameNStart = frameN;  // exact frame index
      
      living_picture_no.setAutoDraw(true);
    }
    
    
    // *living_picture_resp* updates
    if (t >= 0.35 && living_picture_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_picture_resp.tStart = t;  // (not accounting for frame time here)
      living_picture_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { living_picture_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { living_picture_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { living_picture_resp.clearEvents(); });
    }
    
    if (living_picture_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = living_picture_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _living_picture_resp_allKeys = _living_picture_resp_allKeys.concat(theseKeys);
      if (_living_picture_resp_allKeys.length > 0) {
        living_picture_resp.keys = _living_picture_resp_allKeys[_living_picture_resp_allKeys.length - 1].name;  // just the last key pressed
        living_picture_resp.rt = _living_picture_resp_allKeys[_living_picture_resp_allKeys.length - 1].rt;
        living_picture_resp.duration = _living_picture_resp_allKeys[_living_picture_resp_allKeys.length - 1].duration;
        // was this correct?
        if (living_picture_resp.keys == correct_answer) {
            living_picture_resp.corr = 1;
        } else {
            living_picture_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *living_picture_question* updates
    if (t >= 0.0 && living_picture_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_picture_question.tStart = t;  // (not accounting for frame time here)
      living_picture_question.frameNStart = frameN;  // exact frame index
      
      living_picture_question.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of living_pictureComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function living_pictureRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'living_picture' ---
    for (const thisComponent of living_pictureComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (living_picture_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct_answer)) {
         living_picture_resp.corr = 1;  // correct non-response
      } else {
         living_picture_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(living_picture_resp.corr, level);
    }
    psychoJS.experiment.addData('living_picture_resp.keys', living_picture_resp.keys);
    psychoJS.experiment.addData('living_picture_resp.corr', living_picture_resp.corr);
    if (typeof living_picture_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('living_picture_resp.rt', living_picture_resp.rt);
        psychoJS.experiment.addData('living_picture_resp.duration', living_picture_resp.duration);
        routineTimer.reset();
        }
    
    living_picture_resp.stop();
    // the Routine "living_picture" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _living_b_resp_allKeys;
var living_bComponents;
function living_bRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'living_b' ---
    t = 0;
    living_bClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((living_b_categorization_trials.thisN > 0));
    living_b_resp.keys = undefined;
    living_b_resp.rt = undefined;
    _living_b_resp_allKeys = [];
    living_b_block_no.setText(block_total_cat);
    // keep track of which components have finished
    living_bComponents = [];
    living_bComponents.push(living_b_text);
    living_bComponents.push(living_b_text_2);
    living_bComponents.push(living_b_resp);
    living_bComponents.push(living_b_block_no);
    
    for (const thisComponent of living_bComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function living_bRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'living_b' ---
    // get current time
    t = living_bClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *living_b_text* updates
    if (t >= 0.5 && living_b_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_b_text.tStart = t;  // (not accounting for frame time here)
      living_b_text.frameNStart = frameN;  // exact frame index
      
      living_b_text.setAutoDraw(true);
    }
    
    
    // *living_b_text_2* updates
    if (t >= 0.5 && living_b_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_b_text_2.tStart = t;  // (not accounting for frame time here)
      living_b_text_2.frameNStart = frameN;  // exact frame index
      
      living_b_text_2.setAutoDraw(true);
    }
    
    
    // *living_b_resp* updates
    if (t >= 1 && living_b_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_b_resp.tStart = t;  // (not accounting for frame time here)
      living_b_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { living_b_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { living_b_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { living_b_resp.clearEvents(); });
    }
    
    if (living_b_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = living_b_resp.getKeys({keyList: ['space'], waitRelease: false});
      _living_b_resp_allKeys = _living_b_resp_allKeys.concat(theseKeys);
      if (_living_b_resp_allKeys.length > 0) {
        living_b_resp.keys = _living_b_resp_allKeys[_living_b_resp_allKeys.length - 1].name;  // just the last key pressed
        living_b_resp.rt = _living_b_resp_allKeys[_living_b_resp_allKeys.length - 1].rt;
        living_b_resp.duration = _living_b_resp_allKeys[_living_b_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *living_b_block_no* updates
    if (t >= 0.5 && living_b_block_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_b_block_no.tStart = t;  // (not accounting for frame time here)
      living_b_block_no.frameNStart = frameN;  // exact frame index
      
      living_b_block_no.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of living_bComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function living_bRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'living_b' ---
    for (const thisComponent of living_bComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    living_b_resp.stop();
    // the Routine "living_b" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _bed_a_resp_allKeys;
var sleep_aComponents;
function sleep_aRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sleep_a' ---
    t = 0;
    sleep_aClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((bed_a_categorization_trials.thisN > 0));
    bed_a_resp.keys = undefined;
    bed_a_resp.rt = undefined;
    _bed_a_resp_allKeys = [];
    bed_a_block_no.setText(block_total_cat);
    // keep track of which components have finished
    sleep_aComponents = [];
    sleep_aComponents.push(bed_a_text);
    sleep_aComponents.push(bed_a_text_2);
    sleep_aComponents.push(bed_a_resp);
    sleep_aComponents.push(bed_a_block_no);
    
    for (const thisComponent of sleep_aComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sleep_aRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sleep_a' ---
    // get current time
    t = sleep_aClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bed_a_text* updates
    if (t >= 0.5 && bed_a_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_a_text.tStart = t;  // (not accounting for frame time here)
      bed_a_text.frameNStart = frameN;  // exact frame index
      
      bed_a_text.setAutoDraw(true);
    }
    
    
    // *bed_a_text_2* updates
    if (t >= 0.5 && bed_a_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_a_text_2.tStart = t;  // (not accounting for frame time here)
      bed_a_text_2.frameNStart = frameN;  // exact frame index
      
      bed_a_text_2.setAutoDraw(true);
    }
    
    
    // *bed_a_resp* updates
    if (t >= 1 && bed_a_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_a_resp.tStart = t;  // (not accounting for frame time here)
      bed_a_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { bed_a_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { bed_a_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { bed_a_resp.clearEvents(); });
    }
    
    if (bed_a_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = bed_a_resp.getKeys({keyList: ['space'], waitRelease: false});
      _bed_a_resp_allKeys = _bed_a_resp_allKeys.concat(theseKeys);
      if (_bed_a_resp_allKeys.length > 0) {
        bed_a_resp.keys = _bed_a_resp_allKeys[_bed_a_resp_allKeys.length - 1].name;  // just the last key pressed
        bed_a_resp.rt = _bed_a_resp_allKeys[_bed_a_resp_allKeys.length - 1].rt;
        bed_a_resp.duration = _bed_a_resp_allKeys[_bed_a_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *bed_a_block_no* updates
    if (t >= 0.5 && bed_a_block_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_a_block_no.tStart = t;  // (not accounting for frame time here)
      bed_a_block_no.frameNStart = frameN;  // exact frame index
      
      bed_a_block_no.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sleep_aComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sleep_aRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sleep_a' ---
    for (const thisComponent of sleep_aComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    bed_a_resp.stop();
    // the Routine "sleep_a" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sleep_random_isiComponents;
function sleep_random_isiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sleep_random_isi' ---
    t = 0;
    sleep_random_isiClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from bed_random_isi_code
    time = 1 + Math.random();
    // keep track of which components have finished
    sleep_random_isiComponents = [];
    sleep_random_isiComponents.push(bed_random_isi_fix);
    sleep_random_isiComponents.push(bed_random_isi_yes);
    sleep_random_isiComponents.push(bed_random_isi_no);
    sleep_random_isiComponents.push(bed_random_isi_question);
    
    for (const thisComponent of sleep_random_isiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sleep_random_isiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sleep_random_isi' ---
    // get current time
    t = sleep_random_isiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bed_random_isi_fix* updates
    if (t >= 0.0 && bed_random_isi_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_random_isi_fix.tStart = t;  // (not accounting for frame time here)
      bed_random_isi_fix.frameNStart = frameN;  // exact frame index
      
      bed_random_isi_fix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bed_random_isi_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bed_random_isi_fix.setAutoDraw(false);
    }
    
    // *bed_random_isi_yes* updates
    if (t >= 0.0 && bed_random_isi_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_random_isi_yes.tStart = t;  // (not accounting for frame time here)
      bed_random_isi_yes.frameNStart = frameN;  // exact frame index
      
      bed_random_isi_yes.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bed_random_isi_yes.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bed_random_isi_yes.setAutoDraw(false);
    }
    
    // *bed_random_isi_no* updates
    if (t >= 0.0 && bed_random_isi_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_random_isi_no.tStart = t;  // (not accounting for frame time here)
      bed_random_isi_no.frameNStart = frameN;  // exact frame index
      
      bed_random_isi_no.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bed_random_isi_no.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bed_random_isi_no.setAutoDraw(false);
    }
    
    // *bed_random_isi_question* updates
    if (t >= 0.0 && bed_random_isi_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_random_isi_question.tStart = t;  // (not accounting for frame time here)
      bed_random_isi_question.frameNStart = frameN;  // exact frame index
      
      bed_random_isi_question.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bed_random_isi_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bed_random_isi_question.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sleep_random_isiComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sleep_random_isiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sleep_random_isi' ---
    for (const thisComponent of sleep_random_isiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "sleep_random_isi" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _bed_picture_resp_allKeys;
var sleep_pictureComponents;
function sleep_pictureRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sleep_picture' ---
    t = 0;
    sleep_pictureClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    bed_picture_image.setImage(stimulus);
    bed_picture_resp.keys = undefined;
    bed_picture_resp.rt = undefined;
    _bed_picture_resp_allKeys = [];
    // keep track of which components have finished
    sleep_pictureComponents = [];
    sleep_pictureComponents.push(bed_picture_fix);
    sleep_pictureComponents.push(bed_picture_image);
    sleep_pictureComponents.push(bed_picture_yes);
    sleep_pictureComponents.push(bed_picture_no);
    sleep_pictureComponents.push(bed_picture_resp);
    sleep_pictureComponents.push(bed_picture_question);
    
    for (const thisComponent of sleep_pictureComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sleep_pictureRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sleep_picture' ---
    // get current time
    t = sleep_pictureClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bed_picture_fix* updates
    if (t >= 0.0 && bed_picture_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_picture_fix.tStart = t;  // (not accounting for frame time here)
      bed_picture_fix.frameNStart = frameN;  // exact frame index
      
      bed_picture_fix.setAutoDraw(true);
    }
    
    
    // *bed_picture_image* updates
    if (t >= 0.0 && bed_picture_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_picture_image.tStart = t;  // (not accounting for frame time here)
      bed_picture_image.frameNStart = frameN;  // exact frame index
      
      bed_picture_image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bed_picture_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bed_picture_image.setAutoDraw(false);
    }
    
    // *bed_picture_yes* updates
    if (t >= 0.0 && bed_picture_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_picture_yes.tStart = t;  // (not accounting for frame time here)
      bed_picture_yes.frameNStart = frameN;  // exact frame index
      
      bed_picture_yes.setAutoDraw(true);
    }
    
    
    // *bed_picture_no* updates
    if (t >= 0.0 && bed_picture_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_picture_no.tStart = t;  // (not accounting for frame time here)
      bed_picture_no.frameNStart = frameN;  // exact frame index
      
      bed_picture_no.setAutoDraw(true);
    }
    
    
    // *bed_picture_resp* updates
    if (t >= 0.35 && bed_picture_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_picture_resp.tStart = t;  // (not accounting for frame time here)
      bed_picture_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { bed_picture_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { bed_picture_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { bed_picture_resp.clearEvents(); });
    }
    
    if (bed_picture_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = bed_picture_resp.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _bed_picture_resp_allKeys = _bed_picture_resp_allKeys.concat(theseKeys);
      if (_bed_picture_resp_allKeys.length > 0) {
        bed_picture_resp.keys = _bed_picture_resp_allKeys[_bed_picture_resp_allKeys.length - 1].name;  // just the last key pressed
        bed_picture_resp.rt = _bed_picture_resp_allKeys[_bed_picture_resp_allKeys.length - 1].rt;
        bed_picture_resp.duration = _bed_picture_resp_allKeys[_bed_picture_resp_allKeys.length - 1].duration;
        // was this correct?
        if (bed_picture_resp.keys == correct_answer) {
            bed_picture_resp.corr = 1;
        } else {
            bed_picture_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *bed_picture_question* updates
    if (t >= 0.0 && bed_picture_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_picture_question.tStart = t;  // (not accounting for frame time here)
      bed_picture_question.frameNStart = frameN;  // exact frame index
      
      bed_picture_question.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sleep_pictureComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sleep_pictureRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sleep_picture' ---
    for (const thisComponent of sleep_pictureComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (bed_picture_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct_answer)) {
         bed_picture_resp.corr = 1;  // correct non-response
      } else {
         bed_picture_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(bed_picture_resp.corr, level);
    }
    psychoJS.experiment.addData('bed_picture_resp.keys', bed_picture_resp.keys);
    psychoJS.experiment.addData('bed_picture_resp.corr', bed_picture_resp.corr);
    if (typeof bed_picture_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('bed_picture_resp.rt', bed_picture_resp.rt);
        psychoJS.experiment.addData('bed_picture_resp.duration', bed_picture_resp.duration);
        routineTimer.reset();
        }
    
    bed_picture_resp.stop();
    // the Routine "sleep_picture" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _bed_b_resp_allKeys;
var sleep_bComponents;
function sleep_bRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sleep_b' ---
    t = 0;
    sleep_bClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((bed_b_categorization_trials.thisN > 0));
    bed_b_resp.keys = undefined;
    bed_b_resp.rt = undefined;
    _bed_b_resp_allKeys = [];
    bed_b_block_no.setText(block_total_cat);
    // keep track of which components have finished
    sleep_bComponents = [];
    sleep_bComponents.push(bed_b_text);
    sleep_bComponents.push(bed_b_text_2);
    sleep_bComponents.push(bed_b_resp);
    sleep_bComponents.push(bed_b_block_no);
    
    for (const thisComponent of sleep_bComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sleep_bRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sleep_b' ---
    // get current time
    t = sleep_bClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bed_b_text* updates
    if (t >= 0.5 && bed_b_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_b_text.tStart = t;  // (not accounting for frame time here)
      bed_b_text.frameNStart = frameN;  // exact frame index
      
      bed_b_text.setAutoDraw(true);
    }
    
    
    // *bed_b_text_2* updates
    if (t >= 0.5 && bed_b_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_b_text_2.tStart = t;  // (not accounting for frame time here)
      bed_b_text_2.frameNStart = frameN;  // exact frame index
      
      bed_b_text_2.setAutoDraw(true);
    }
    
    
    // *bed_b_resp* updates
    if (t >= 1 && bed_b_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_b_resp.tStart = t;  // (not accounting for frame time here)
      bed_b_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { bed_b_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { bed_b_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { bed_b_resp.clearEvents(); });
    }
    
    if (bed_b_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = bed_b_resp.getKeys({keyList: ['space'], waitRelease: false});
      _bed_b_resp_allKeys = _bed_b_resp_allKeys.concat(theseKeys);
      if (_bed_b_resp_allKeys.length > 0) {
        bed_b_resp.keys = _bed_b_resp_allKeys[_bed_b_resp_allKeys.length - 1].name;  // just the last key pressed
        bed_b_resp.rt = _bed_b_resp_allKeys[_bed_b_resp_allKeys.length - 1].rt;
        bed_b_resp.duration = _bed_b_resp_allKeys[_bed_b_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *bed_b_block_no* updates
    if (t >= 0.5 && bed_b_block_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_b_block_no.tStart = t;  // (not accounting for frame time here)
      bed_b_block_no.frameNStart = frameN;  // exact frame index
      
      bed_b_block_no.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sleep_bComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sleep_bRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sleep_b' ---
    for (const thisComponent of sleep_bComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    bed_b_resp.stop();
    // the Routine "sleep_b" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _break_resp_allKeys;
var middle_breakComponents;
function middle_breakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'middle_break' ---
    t = 0;
    middle_breakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    break_resp.keys = undefined;
    break_resp.rt = undefined;
    _break_resp_allKeys = [];
    // keep track of which components have finished
    middle_breakComponents = [];
    middle_breakComponents.push(break_text);
    middle_breakComponents.push(break_resp);
    
    for (const thisComponent of middle_breakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function middle_breakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'middle_break' ---
    // get current time
    t = middle_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break_text* updates
    if (t >= 0.5 && break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_text.tStart = t;  // (not accounting for frame time here)
      break_text.frameNStart = frameN;  // exact frame index
      
      break_text.setAutoDraw(true);
    }
    
    
    // *break_resp* updates
    if (t >= 0.5 && break_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_resp.tStart = t;  // (not accounting for frame time here)
      break_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { break_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { break_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { break_resp.clearEvents(); });
    }
    
    if (break_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = break_resp.getKeys({keyList: ['space'], waitRelease: false});
      _break_resp_allKeys = _break_resp_allKeys.concat(theseKeys);
      if (_break_resp_allKeys.length > 0) {
        break_resp.keys = _break_resp_allKeys[_break_resp_allKeys.length - 1].name;  // just the last key pressed
        break_resp.rt = _break_resp_allKeys[_break_resp_allKeys.length - 1].rt;
        break_resp.duration = _break_resp_allKeys[_break_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of middle_breakComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function middle_breakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'middle_break' ---
    for (const thisComponent of middle_breakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    break_resp.stop();
    // the Routine "middle_break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instructions_memo_resp_allKeys;
var instruction_memoComponents;
function instruction_memoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_memo' ---
    t = 0;
    instruction_memoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructions_memo_resp.keys = undefined;
    instructions_memo_resp.rt = undefined;
    _instructions_memo_resp_allKeys = [];
    // keep track of which components have finished
    instruction_memoComponents = [];
    instruction_memoComponents.push(instructions_memo_text);
    instruction_memoComponents.push(instructions_memo_resp);
    
    for (const thisComponent of instruction_memoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_memoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_memo' ---
    // get current time
    t = instruction_memoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_memo_text* updates
    if (t >= 0.5 && instructions_memo_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_memo_text.tStart = t;  // (not accounting for frame time here)
      instructions_memo_text.frameNStart = frameN;  // exact frame index
      
      instructions_memo_text.setAutoDraw(true);
    }
    
    
    // *instructions_memo_resp* updates
    if (t >= 0.5 && instructions_memo_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_memo_resp.tStart = t;  // (not accounting for frame time here)
      instructions_memo_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_memo_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_memo_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_memo_resp.clearEvents(); });
    }
    
    if (instructions_memo_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_memo_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_memo_resp_allKeys = _instructions_memo_resp_allKeys.concat(theseKeys);
      if (_instructions_memo_resp_allKeys.length > 0) {
        instructions_memo_resp.keys = _instructions_memo_resp_allKeys[_instructions_memo_resp_allKeys.length - 1].name;  // just the last key pressed
        instructions_memo_resp.rt = _instructions_memo_resp_allKeys[_instructions_memo_resp_allKeys.length - 1].rt;
        instructions_memo_resp.duration = _instructions_memo_resp_allKeys[_instructions_memo_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_memoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_memoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_memo' ---
    for (const thisComponent of instruction_memoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instructions_memo_resp.stop();
    // the Routine "instruction_memo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var memo_fix_isiComponents;
function memo_fix_isiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'memo_fix_isi' ---
    t = 0;
    memo_fix_isiClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    memo_fix_isiComponents = [];
    memo_fix_isiComponents.push(memo_fix_pic);
    
    for (const thisComponent of memo_fix_isiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function memo_fix_isiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'memo_fix_isi' ---
    // get current time
    t = memo_fix_isiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *memo_fix_pic* updates
    if (t >= 0.0 && memo_fix_pic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memo_fix_pic.tStart = t;  // (not accounting for frame time here)
      memo_fix_pic.frameNStart = frameN;  // exact frame index
      
      memo_fix_pic.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (memo_fix_pic.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      memo_fix_pic.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of memo_fix_isiComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function memo_fix_isiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'memo_fix_isi' ---
    for (const thisComponent of memo_fix_isiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "memo_fix_isi" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var memo_trainingComponents;
function memo_trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'memo_training' ---
    t = 0;
    memo_trainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    memo_training_stim.setImage(stimulus);
    memo_training_slider.reset()
    // keep track of which components have finished
    memo_trainingComponents = [];
    memo_trainingComponents.push(memo_training_fix);
    memo_trainingComponents.push(memo_training_stim);
    memo_trainingComponents.push(memo_training_slider);
    
    for (const thisComponent of memo_trainingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function memo_trainingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'memo_training' ---
    // get current time
    t = memo_trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *memo_training_fix* updates
    if (t >= 0.0 && memo_training_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memo_training_fix.tStart = t;  // (not accounting for frame time here)
      memo_training_fix.frameNStart = frameN;  // exact frame index
      
      memo_training_fix.setAutoDraw(true);
    }
    
    
    // *memo_training_stim* updates
    if (t >= 0.0 && memo_training_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memo_training_stim.tStart = t;  // (not accounting for frame time here)
      memo_training_stim.frameNStart = frameN;  // exact frame index
      
      memo_training_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (memo_training_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      memo_training_stim.setAutoDraw(false);
    }
    
    // *memo_training_slider* updates
    if (t >= 0.0 && memo_training_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memo_training_slider.tStart = t;  // (not accounting for frame time here)
      memo_training_slider.frameNStart = frameN;  // exact frame index
      
      memo_training_slider.setAutoDraw(true);
    }
    
    
    // Check memo_training_slider for response to end Routine
    if (memo_training_slider.getRating() !== undefined && memo_training_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of memo_trainingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function memo_trainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'memo_training' ---
    for (const thisComponent of memo_trainingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('memo_training_slider.response', memo_training_slider.getRating());
    psychoJS.experiment.addData('memo_training_slider.rt', memo_training_slider.getRT());
    // the Routine "memo_training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var rating;
var memo_train_feedb_eval;
var memo_training_feedbackComponents;
function memo_training_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'memo_training_feedback' ---
    t = 0;
    memo_training_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from memo_train_feedb_code
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6("alt", memo_training_slider.getRating())) {
        rating = 1;
    } else {
        rating = 3;
    }
    if ((rating === correct_1)) {
        memo_train_feedb_eval = "korrekt";
    } else {
        memo_train_feedb_eval = "falsch";
    }
    
    memo_train_feedb_text.setText(memo_train_feedb_eval);
    // keep track of which components have finished
    memo_training_feedbackComponents = [];
    memo_training_feedbackComponents.push(memo_train_feedb_text);
    
    for (const thisComponent of memo_training_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function memo_training_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'memo_training_feedback' ---
    // get current time
    t = memo_training_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *memo_train_feedb_text* updates
    if (t >= 0.5 && memo_train_feedb_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memo_train_feedb_text.tStart = t;  // (not accounting for frame time here)
      memo_train_feedb_text.frameNStart = frameN;  // exact frame index
      
      memo_train_feedb_text.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (memo_train_feedb_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      memo_train_feedb_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of memo_training_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function memo_training_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'memo_training_feedback' ---
    for (const thisComponent of memo_training_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _start_memotest_resp_allKeys;
var start_memotestComponents;
function start_memotestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_memotest' ---
    t = 0;
    start_memotestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    start_memotest_resp.keys = undefined;
    start_memotest_resp.rt = undefined;
    _start_memotest_resp_allKeys = [];
    // keep track of which components have finished
    start_memotestComponents = [];
    start_memotestComponents.push(start_memotest_text);
    start_memotestComponents.push(start_memotest_resp);
    
    for (const thisComponent of start_memotestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_memotestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_memotest' ---
    // get current time
    t = start_memotestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_memotest_text* updates
    if (t >= 0.5 && start_memotest_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_memotest_text.tStart = t;  // (not accounting for frame time here)
      start_memotest_text.frameNStart = frameN;  // exact frame index
      
      start_memotest_text.setAutoDraw(true);
    }
    
    
    // *start_memotest_resp* updates
    if (t >= 0.5 && start_memotest_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_memotest_resp.tStart = t;  // (not accounting for frame time here)
      start_memotest_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_memotest_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_memotest_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_memotest_resp.clearEvents(); });
    }
    
    if (start_memotest_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_memotest_resp.getKeys({keyList: ['space'], waitRelease: false});
      _start_memotest_resp_allKeys = _start_memotest_resp_allKeys.concat(theseKeys);
      if (_start_memotest_resp_allKeys.length > 0) {
        start_memotest_resp.keys = _start_memotest_resp_allKeys[_start_memotest_resp_allKeys.length - 1].name;  // just the last key pressed
        start_memotest_resp.rt = _start_memotest_resp_allKeys[_start_memotest_resp_allKeys.length - 1].rt;
        start_memotest_resp.duration = _start_memotest_resp_allKeys[_start_memotest_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_memotestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_memotestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_memotest' ---
    for (const thisComponent of start_memotestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    start_memotest_resp.stop();
    // the Routine "start_memotest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var memotest_taskComponents;
function memotest_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'memotest_task' ---
    t = 0;
    memotest_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    memotest_task_stim.setImage(stimulus);
    memotest_task_slider.reset()
    // keep track of which components have finished
    memotest_taskComponents = [];
    memotest_taskComponents.push(memotest_task_stim);
    memotest_taskComponents.push(memotest_task_slider);
    
    for (const thisComponent of memotest_taskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function memotest_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'memotest_task' ---
    // get current time
    t = memotest_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *memotest_task_stim* updates
    if (t >= 0.0 && memotest_task_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memotest_task_stim.tStart = t;  // (not accounting for frame time here)
      memotest_task_stim.frameNStart = frameN;  // exact frame index
      
      memotest_task_stim.setAutoDraw(true);
    }
    
    
    // *memotest_task_slider* updates
    if (t >= 0.0 && memotest_task_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memotest_task_slider.tStart = t;  // (not accounting for frame time here)
      memotest_task_slider.frameNStart = frameN;  // exact frame index
      
      memotest_task_slider.setAutoDraw(true);
    }
    
    
    // Check memotest_task_slider for response to end Routine
    if (memotest_task_slider.getRating() !== undefined && memotest_task_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of memotest_taskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function memotest_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'memotest_task' ---
    for (const thisComponent of memotest_taskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('memotest_task_slider.response', memotest_task_slider.getRating());
    psychoJS.experiment.addData('memotest_task_slider.rt', memotest_task_slider.getRT());
    // the Routine "memotest_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var vpcode;
var _end_resp_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from vpcode_code
    vpcode = Math.floor(Math.random() * 900000) + 100000;
    
    end_resp.keys = undefined;
    end_resp.rt = undefined;
    _end_resp_allKeys = [];
    vp_code_text.setText(vpcode);
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(end_resp);
    endComponents.push(vp_code_text);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }
    
    
    // *end_resp* updates
    if (t >= 0.5 && end_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_resp.tStart = t;  // (not accounting for frame time here)
      end_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_resp.clearEvents(); });
    }
    
    if (end_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_resp.getKeys({keyList: ['space'], waitRelease: false});
      _end_resp_allKeys = _end_resp_allKeys.concat(theseKeys);
      if (_end_resp_allKeys.length > 0) {
        end_resp.keys = _end_resp_allKeys[_end_resp_allKeys.length - 1].name;  // just the last key pressed
        end_resp.rt = _end_resp_allKeys[_end_resp_allKeys.length - 1].rt;
        end_resp.duration = _end_resp_allKeys[_end_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *vp_code_text* updates
    if (t >= 0.5 && vp_code_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vp_code_text.tStart = t;  // (not accounting for frame time here)
      vp_code_text.frameNStart = frameN;  // exact frame index
      
      vp_code_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from vpcode_code
    psychoJS.experiment.addData("vpcode", vpcode);
    
    end_resp.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
