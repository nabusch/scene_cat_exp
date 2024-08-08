/********************************* 
 * Scenecat_2023_2_Key_Resp *
 *********************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'SceneCat_2023_2_key_resp';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'age': '',
    'gender': '',
    'handedness': '',
    'email for compensation': '',
};

// Start code blocks for 'Before Experiment'




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
flowScheduler.add(instructions_cat_2RoutineBegin());
flowScheduler.add(instructions_cat_2RoutineEachFrame());
flowScheduler.add(instructions_cat_2RoutineEnd());
flowScheduler.add(category_test_textRoutineBegin());
flowScheduler.add(category_test_textRoutineEachFrame());
flowScheduler.add(category_test_textRoutineEnd());
const cat_training_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(cat_training_trialsLoopBegin(cat_training_trialsLoopScheduler));
flowScheduler.add(cat_training_trialsLoopScheduler);
flowScheduler.add(cat_training_trialsLoopEnd);




flowScheduler.add(instruction_memoRoutineBegin());
flowScheduler.add(instruction_memoRoutineEachFrame());
flowScheduler.add(instruction_memoRoutineEnd());
const memo_training_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(memo_training_trialsLoopBegin(memo_training_trialsLoopScheduler));
flowScheduler.add(memo_training_trialsLoopScheduler);
flowScheduler.add(memo_training_trialsLoopEnd);




flowScheduler.add(start_categorizationRoutineBegin());
flowScheduler.add(start_categorizationRoutineEachFrame());
flowScheduler.add(start_categorizationRoutineEnd());
const categorization_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(categorization_trialsLoopBegin(categorization_trialsLoopScheduler));
flowScheduler.add(categorization_trialsLoopScheduler);
flowScheduler.add(categorization_trialsLoopEnd);






























































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
    {'name': 'stimuli/catch_01.jpg', 'path': 'stimuli/catch_01.jpg'},
    {'name': 'stimuli/catch_02.jpg', 'path': 'stimuli/catch_02.jpg'},
    {'name': 'stimuli/catch_03.jpg', 'path': 'stimuli/catch_03.jpg'},
    {'name': 'stimuli/catch_04.jpg', 'path': 'stimuli/catch_04.jpg'},
    {'name': 'stimuli/catch_05.jpg', 'path': 'stimuli/catch_05.jpg'},
    {'name': 'stimuli/catch_06.jpg', 'path': 'stimuli/catch_06.jpg'},
    {'name': 'stimuli/catch_07.jpg', 'path': 'stimuli/catch_07.jpg'},
    {'name': 'stimuli/catch_08.jpg', 'path': 'stimuli/catch_08.jpg'},
    {'name': 'stimuli/catch_09.jpg', 'path': 'stimuli/catch_09.jpg'},
    {'name': 'stimuli/catch_10.jpg', 'path': 'stimuli/catch_10.jpg'},
    {'name': 'stimuli/catch_11.jpg', 'path': 'stimuli/catch_11.jpg'},
    {'name': 'stimuli/catch_12.jpg', 'path': 'stimuli/catch_12.jpg'},
    {'name': 'stimuli/catch_13.jpg', 'path': 'stimuli/catch_13.jpg'},
    {'name': 'stimuli/catch_14.jpg', 'path': 'stimuli/catch_14.jpg'},
    {'name': 'stimuli/catch_15.jpg', 'path': 'stimuli/catch_15.jpg'},
    {'name': 'stimuli/catch_16.jpg', 'path': 'stimuli/catch_16.jpg'},
    {'name': 'stimuli/catch_17.jpg', 'path': 'stimuli/catch_17.jpg'},
    {'name': 'stimuli/catch_18.jpg', 'path': 'stimuli/catch_18.jpg'},
    {'name': 'stimuli/catch_19.jpg', 'path': 'stimuli/catch_19.jpg'},
    {'name': 'stimuli/catch_20.jpg', 'path': 'stimuli/catch_20.jpg'},
    {'name': 'stimuli/catch_21.jpg', 'path': 'stimuli/catch_21.jpg'},
    {'name': 'stimuli/catch_22.jpg', 'path': 'stimuli/catch_22.jpg'},
    {'name': 'stimuli/catch_23.jpg', 'path': 'stimuli/catch_23.jpg'},
    {'name': 'stimuli/catch_24.jpg', 'path': 'stimuli/catch_24.jpg'},
    {'name': 'stimuli/catch_25.jpg', 'path': 'stimuli/catch_25.jpg'},
    {'name': 'stimuli/catch_26.jpg', 'path': 'stimuli/catch_26.jpg'},
    {'name': 'stimuli/catch_27.jpg', 'path': 'stimuli/catch_27.jpg'},
    {'name': 'stimuli/catch_28.jpg', 'path': 'stimuli/catch_28.jpg'},
    {'name': 'stimuli/catch_29.jpg', 'path': 'stimuli/catch_29.jpg'},
    {'name': 'stimuli/catch_30.jpg', 'path': 'stimuli/catch_30.jpg'},
    {'name': 'stimuli/catch_31.jpg', 'path': 'stimuli/catch_31.jpg'},
    {'name': 'stimuli/catch_32.jpg', 'path': 'stimuli/catch_32.jpg'},
    {'name': 'stimuli/catch_33.jpg', 'path': 'stimuli/catch_33.jpg'},
    {'name': 'stimuli/catch_34.jpg', 'path': 'stimuli/catch_34.jpg'},
    {'name': 'stimuli/catch_35.jpg', 'path': 'stimuli/catch_35.jpg'},
    {'name': 'stimuli/catch_36.jpg', 'path': 'stimuli/catch_36.jpg'},
    {'name': 'stimuli/catch_37.jpg', 'path': 'stimuli/catch_37.jpg'},
    {'name': 'stimuli/catch_38.jpg', 'path': 'stimuli/catch_38.jpg'},
    {'name': 'stimuli/catch_39.jpg', 'path': 'stimuli/catch_39.jpg'},
    {'name': 'stimuli/catch_40.jpg', 'path': 'stimuli/catch_40.jpg'},
    {'name': 'stimuli/img_0eflx.png', 'path': 'stimuli/img_0eflx.png'},
    {'name': 'stimuli/img_0j24m.png', 'path': 'stimuli/img_0j24m.png'},
    {'name': 'stimuli/img_0jzz7.png', 'path': 'stimuli/img_0jzz7.png'},
    {'name': 'stimuli/img_0mhms.png', 'path': 'stimuli/img_0mhms.png'},
    {'name': 'stimuli/img_0nckg.png', 'path': 'stimuli/img_0nckg.png'},
    {'name': 'stimuli/img_1ao2d.png', 'path': 'stimuli/img_1ao2d.png'},
    {'name': 'stimuli/img_1r2ri.png', 'path': 'stimuli/img_1r2ri.png'},
    {'name': 'stimuli/img_1r08n.png', 'path': 'stimuli/img_1r08n.png'},
    {'name': 'stimuli/img_1vq1v.png', 'path': 'stimuli/img_1vq1v.png'},
    {'name': 'stimuli/img_01w8b.png', 'path': 'stimuli/img_01w8b.png'},
    {'name': 'stimuli/img_1zhz6.png', 'path': 'stimuli/img_1zhz6.png'},
    {'name': 'stimuli/img_02alv.png', 'path': 'stimuli/img_02alv.png'},
    {'name': 'stimuli/img_2b8fp.png', 'path': 'stimuli/img_2b8fp.png'},
    {'name': 'stimuli/img_2dnfy.png', 'path': 'stimuli/img_2dnfy.png'},
    {'name': 'stimuli/img_2js6m.png', 'path': 'stimuli/img_2js6m.png'},
    {'name': 'stimuli/img_2pk6v.png', 'path': 'stimuli/img_2pk6v.png'},
    {'name': 'stimuli/img_2pnl2.png', 'path': 'stimuli/img_2pnl2.png'},
    {'name': 'stimuli/img_2qhro.png', 'path': 'stimuli/img_2qhro.png'},
    {'name': 'stimuli/img_3bxjb.png', 'path': 'stimuli/img_3bxjb.png'},
    {'name': 'stimuli/img_3gm8h.png', 'path': 'stimuli/img_3gm8h.png'},
    {'name': 'stimuli/img_3h4c9.png', 'path': 'stimuli/img_3h4c9.png'},
    {'name': 'stimuli/img_3jnt7.png', 'path': 'stimuli/img_3jnt7.png'},
    {'name': 'stimuli/img_3m61b.png', 'path': 'stimuli/img_3m61b.png'},
    {'name': 'stimuli/img_3sw8t.png', 'path': 'stimuli/img_3sw8t.png'},
    {'name': 'stimuli/img_3tnh4.png', 'path': 'stimuli/img_3tnh4.png'},
    {'name': 'stimuli/img_3ze38.png', 'path': 'stimuli/img_3ze38.png'},
    {'name': 'stimuli/img_4o8l0.png', 'path': 'stimuli/img_4o8l0.png'},
    {'name': 'stimuli/img_4ufga.png', 'path': 'stimuli/img_4ufga.png'},
    {'name': 'stimuli/img_4wq98.png', 'path': 'stimuli/img_4wq98.png'},
    {'name': 'stimuli/img_05flq.png', 'path': 'stimuli/img_05flq.png'},
    {'name': 'stimuli/img_5il0t.png', 'path': 'stimuli/img_5il0t.png'},
    {'name': 'stimuli/img_5jp4f.png', 'path': 'stimuli/img_5jp4f.png'},
    {'name': 'stimuli/img_5jy9c.png', 'path': 'stimuli/img_5jy9c.png'},
    {'name': 'stimuli/img_5m6x4.png', 'path': 'stimuli/img_5m6x4.png'},
    {'name': 'stimuli/img_5mw7y.png', 'path': 'stimuli/img_5mw7y.png'},
    {'name': 'stimuli/img_5nlnv.png', 'path': 'stimuli/img_5nlnv.png'},
    {'name': 'stimuli/img_5p2ql.png', 'path': 'stimuli/img_5p2ql.png'},
    {'name': 'stimuli/img_5tr4v.png', 'path': 'stimuli/img_5tr4v.png'},
    {'name': 'stimuli/img_5yhyk.png', 'path': 'stimuli/img_5yhyk.png'},
    {'name': 'stimuli/img_6a0hu.png', 'path': 'stimuli/img_6a0hu.png'},
    {'name': 'stimuli/img_6ddrx.png', 'path': 'stimuli/img_6ddrx.png'},
    {'name': 'stimuli/img_6nbgt.png', 'path': 'stimuli/img_6nbgt.png'},
    {'name': 'stimuli/img_6wne4.png', 'path': 'stimuli/img_6wne4.png'},
    {'name': 'stimuli/img_6zz63.png', 'path': 'stimuli/img_6zz63.png'},
    {'name': 'stimuli/img_7caxh.png', 'path': 'stimuli/img_7caxh.png'},
    {'name': 'stimuli/img_7ed9m.png', 'path': 'stimuli/img_7ed9m.png'},
    {'name': 'stimuli/img_7lz7m.png', 'path': 'stimuli/img_7lz7m.png'},
    {'name': 'stimuli/img_7os7q.png', 'path': 'stimuli/img_7os7q.png'},
    {'name': 'stimuli/img_7pgd2.png', 'path': 'stimuli/img_7pgd2.png'},
    {'name': 'stimuli/img_7ucnr.png', 'path': 'stimuli/img_7ucnr.png'},
    {'name': 'stimuli/img_7w5tw.png', 'path': 'stimuli/img_7w5tw.png'},
    {'name': 'stimuli/img_7wquy.png', 'path': 'stimuli/img_7wquy.png'},
    {'name': 'stimuli/img_7wul8.png', 'path': 'stimuli/img_7wul8.png'},
    {'name': 'stimuli/img_8dacu.png', 'path': 'stimuli/img_8dacu.png'},
    {'name': 'stimuli/img_8dmpq.png', 'path': 'stimuli/img_8dmpq.png'},
    {'name': 'stimuli/img_8fpog.png', 'path': 'stimuli/img_8fpog.png'},
    {'name': 'stimuli/img_9bkl9.png', 'path': 'stimuli/img_9bkl9.png'},
    {'name': 'stimuli/img_9mcah.png', 'path': 'stimuli/img_9mcah.png'},
    {'name': 'stimuli/img_9oofc.png', 'path': 'stimuli/img_9oofc.png'},
    {'name': 'stimuli/img_9pfbj.png', 'path': 'stimuli/img_9pfbj.png'},
    {'name': 'stimuli/img_9z99v.png', 'path': 'stimuli/img_9z99v.png'},
    {'name': 'stimuli/img_16kib.png', 'path': 'stimuli/img_16kib.png'},
    {'name': 'stimuli/img_24rt2.png', 'path': 'stimuli/img_24rt2.png'},
    {'name': 'stimuli/img_30vz5.png', 'path': 'stimuli/img_30vz5.png'},
    {'name': 'stimuli/img_37hgm.png', 'path': 'stimuli/img_37hgm.png'},
    {'name': 'stimuli/img_49h18.png', 'path': 'stimuli/img_49h18.png'},
    {'name': 'stimuli/img_53nbn.png', 'path': 'stimuli/img_53nbn.png'},
    {'name': 'stimuli/img_57os5.png', 'path': 'stimuli/img_57os5.png'},
    {'name': 'stimuli/img_65cdi.png', 'path': 'stimuli/img_65cdi.png'},
    {'name': 'stimuli/img_68wfw.png', 'path': 'stimuli/img_68wfw.png'},
    {'name': 'stimuli/img_71mhq.png', 'path': 'stimuli/img_71mhq.png'},
    {'name': 'stimuli/img_72fmj.png', 'path': 'stimuli/img_72fmj.png'},
    {'name': 'stimuli/img_73pyk.png', 'path': 'stimuli/img_73pyk.png'},
    {'name': 'stimuli/img_79b5l.png', 'path': 'stimuli/img_79b5l.png'},
    {'name': 'stimuli/img_84s7n.png', 'path': 'stimuli/img_84s7n.png'},
    {'name': 'stimuli/img_088sa.png', 'path': 'stimuli/img_088sa.png'},
    {'name': 'stimuli/img_89dvt.png', 'path': 'stimuli/img_89dvt.png'},
    {'name': 'stimuli/img_89rmb.png', 'path': 'stimuli/img_89rmb.png'},
    {'name': 'stimuli/img_91csq.png', 'path': 'stimuli/img_91csq.png'},
    {'name': 'stimuli/img_91lbx.png', 'path': 'stimuli/img_91lbx.png'},
    {'name': 'stimuli/img_95hiv.png', 'path': 'stimuli/img_95hiv.png'},
    {'name': 'stimuli/img_99exx.png', 'path': 'stimuli/img_99exx.png'},
    {'name': 'stimuli/img_165pk.png', 'path': 'stimuli/img_165pk.png'},
    {'name': 'stimuli/img_196rk.png', 'path': 'stimuli/img_196rk.png'},
    {'name': 'stimuli/img_411xa.png', 'path': 'stimuli/img_411xa.png'},
    {'name': 'stimuli/img_463mq.png', 'path': 'stimuli/img_463mq.png'},
    {'name': 'stimuli/img_4974k.png', 'path': 'stimuli/img_4974k.png'},
    {'name': 'stimuli/img_5949k.png', 'path': 'stimuli/img_5949k.png'},
    {'name': 'stimuli/img_9684y.png', 'path': 'stimuli/img_9684y.png'},
    {'name': 'stimuli/img_60242.png', 'path': 'stimuli/img_60242.png'},
    {'name': 'stimuli/img_a8wvq.png', 'path': 'stimuli/img_a8wvq.png'},
    {'name': 'stimuli/img_a8y4y.png', 'path': 'stimuli/img_a8y4y.png'},
    {'name': 'stimuli/img_a9acb.png', 'path': 'stimuli/img_a9acb.png'},
    {'name': 'stimuli/img_a9he3.png', 'path': 'stimuli/img_a9he3.png'},
    {'name': 'stimuli/img_abobq.png', 'path': 'stimuli/img_abobq.png'},
    {'name': 'stimuli/img_ac0ey.png', 'path': 'stimuli/img_ac0ey.png'},
    {'name': 'stimuli/img_amsgw.png', 'path': 'stimuli/img_amsgw.png'},
    {'name': 'stimuli/img_anjr0.png', 'path': 'stimuli/img_anjr0.png'},
    {'name': 'stimuli/img_anzgh.png', 'path': 'stimuli/img_anzgh.png'},
    {'name': 'stimuli/img_aplao.png', 'path': 'stimuli/img_aplao.png'},
    {'name': 'stimuli/img_as3da.png', 'path': 'stimuli/img_as3da.png'},
    {'name': 'stimuli/img_aweye.png', 'path': 'stimuli/img_aweye.png'},
    {'name': 'stimuli/img_awuev.png', 'path': 'stimuli/img_awuev.png'},
    {'name': 'stimuli/img_b2jli.png', 'path': 'stimuli/img_b2jli.png'},
    {'name': 'stimuli/img_b21d7.png', 'path': 'stimuli/img_b21d7.png'},
    {'name': 'stimuli/img_b89t4.png', 'path': 'stimuli/img_b89t4.png'},
    {'name': 'stimuli/img_b971s.png', 'path': 'stimuli/img_b971s.png'},
    {'name': 'stimuli/img_badai.png', 'path': 'stimuli/img_badai.png'},
    {'name': 'stimuli/img_bbs77.png', 'path': 'stimuli/img_bbs77.png'},
    {'name': 'stimuli/img_bdz92.png', 'path': 'stimuli/img_bdz92.png'},
    {'name': 'stimuli/img_bf8nx.png', 'path': 'stimuli/img_bf8nx.png'},
    {'name': 'stimuli/img_bg264.png', 'path': 'stimuli/img_bg264.png'},
    {'name': 'stimuli/img_bj2gr.png', 'path': 'stimuli/img_bj2gr.png'},
    {'name': 'stimuli/img_bj99b.png', 'path': 'stimuli/img_bj99b.png'},
    {'name': 'stimuli/img_bklr1.png', 'path': 'stimuli/img_bklr1.png'},
    {'name': 'stimuli/img_bntrh.png', 'path': 'stimuli/img_bntrh.png'},
    {'name': 'stimuli/img_bpyv5.png', 'path': 'stimuli/img_bpyv5.png'},
    {'name': 'stimuli/img_bwo9g.png', 'path': 'stimuli/img_bwo9g.png'},
    {'name': 'stimuli/img_c0me7.png', 'path': 'stimuli/img_c0me7.png'},
    {'name': 'stimuli/img_c0vzo.png', 'path': 'stimuli/img_c0vzo.png'},
    {'name': 'stimuli/img_c2pbs.png', 'path': 'stimuli/img_c2pbs.png'},
    {'name': 'stimuli/img_c4uwt.png', 'path': 'stimuli/img_c4uwt.png'},
    {'name': 'stimuli/img_c30d1.png', 'path': 'stimuli/img_c30d1.png'},
    {'name': 'stimuli/img_c79r7.png', 'path': 'stimuli/img_c79r7.png'},
    {'name': 'stimuli/img_c89x3.png', 'path': 'stimuli/img_c89x3.png'},
    {'name': 'stimuli/img_ca8kd.png', 'path': 'stimuli/img_ca8kd.png'},
    {'name': 'stimuli/img_ccn2w.png', 'path': 'stimuli/img_ccn2w.png'},
    {'name': 'stimuli/img_ce9vx.png', 'path': 'stimuli/img_ce9vx.png'},
    {'name': 'stimuli/img_ce55l.png', 'path': 'stimuli/img_ce55l.png'},
    {'name': 'stimuli/img_cehin.png', 'path': 'stimuli/img_cehin.png'},
    {'name': 'stimuli/img_cgdyc.png', 'path': 'stimuli/img_cgdyc.png'},
    {'name': 'stimuli/img_cmyvx.png', 'path': 'stimuli/img_cmyvx.png'},
    {'name': 'stimuli/img_cnyac.png', 'path': 'stimuli/img_cnyac.png'},
    {'name': 'stimuli/img_cogrz.png', 'path': 'stimuli/img_cogrz.png'},
    {'name': 'stimuli/img_cv6mf.png', 'path': 'stimuli/img_cv6mf.png'},
    {'name': 'stimuli/img_cv9qj.png', 'path': 'stimuli/img_cv9qj.png'},
    {'name': 'stimuli/img_cxpff.png', 'path': 'stimuli/img_cxpff.png'},
    {'name': 'stimuli/img_d0k76.png', 'path': 'stimuli/img_d0k76.png'},
    {'name': 'stimuli/img_d3t0o.png', 'path': 'stimuli/img_d3t0o.png'},
    {'name': 'stimuli/img_d8xbu.png', 'path': 'stimuli/img_d8xbu.png'},
    {'name': 'stimuli/img_d9ogj.png', 'path': 'stimuli/img_d9ogj.png'},
    {'name': 'stimuli/img_d26ik.png', 'path': 'stimuli/img_d26ik.png'},
    {'name': 'stimuli/img_dg5h7.png', 'path': 'stimuli/img_dg5h7.png'},
    {'name': 'stimuli/img_di6f0.png', 'path': 'stimuli/img_di6f0.png'},
    {'name': 'stimuli/img_di49w.png', 'path': 'stimuli/img_di49w.png'},
    {'name': 'stimuli/img_die1d.png', 'path': 'stimuli/img_die1d.png'},
    {'name': 'stimuli/img_dkqas.png', 'path': 'stimuli/img_dkqas.png'},
    {'name': 'stimuli/img_dmjh8.png', 'path': 'stimuli/img_dmjh8.png'},
    {'name': 'stimuli/img_ds88w.png', 'path': 'stimuli/img_ds88w.png'},
    {'name': 'stimuli/img_e0hwx.png', 'path': 'stimuli/img_e0hwx.png'},
    {'name': 'stimuli/img_e26ut.png', 'path': 'stimuli/img_e26ut.png'},
    {'name': 'stimuli/img_eatdk.png', 'path': 'stimuli/img_eatdk.png'},
    {'name': 'stimuli/img_eh0no.png', 'path': 'stimuli/img_eh0no.png'},
    {'name': 'stimuli/img_eiu3c.png', 'path': 'stimuli/img_eiu3c.png'},
    {'name': 'stimuli/img_emh91.png', 'path': 'stimuli/img_emh91.png'},
    {'name': 'stimuli/img_ensho.png', 'path': 'stimuli/img_ensho.png'},
    {'name': 'stimuli/img_eppte.png', 'path': 'stimuli/img_eppte.png'},
    {'name': 'stimuli/img_es7o2.png', 'path': 'stimuli/img_es7o2.png'},
    {'name': 'stimuli/img_esb4r.png', 'path': 'stimuli/img_esb4r.png'},
    {'name': 'stimuli/img_ewrjk.png', 'path': 'stimuli/img_ewrjk.png'},
    {'name': 'stimuli/img_f4jxo.png', 'path': 'stimuli/img_f4jxo.png'},
    {'name': 'stimuli/img_f63yi.png', 'path': 'stimuli/img_f63yi.png'},
    {'name': 'stimuli/img_faly8.png', 'path': 'stimuli/img_faly8.png'},
    {'name': 'stimuli/img_fbihy.png', 'path': 'stimuli/img_fbihy.png'},
    {'name': 'stimuli/img_fea1z.png', 'path': 'stimuli/img_fea1z.png'},
    {'name': 'stimuli/img_fhm45.png', 'path': 'stimuli/img_fhm45.png'},
    {'name': 'stimuli/img_fmgjx.png', 'path': 'stimuli/img_fmgjx.png'},
    {'name': 'stimuli/img_fnu4h.png', 'path': 'stimuli/img_fnu4h.png'},
    {'name': 'stimuli/img_fqgem.png', 'path': 'stimuli/img_fqgem.png'},
    {'name': 'stimuli/img_g2akb.png', 'path': 'stimuli/img_g2akb.png'},
    {'name': 'stimuli/img_g9od8.png', 'path': 'stimuli/img_g9od8.png'},
    {'name': 'stimuli/img_g13d5.png', 'path': 'stimuli/img_g13d5.png'},
    {'name': 'stimuli/img_g7870.png', 'path': 'stimuli/img_g7870.png'},
    {'name': 'stimuli/img_gbypq.png', 'path': 'stimuli/img_gbypq.png'},
    {'name': 'stimuli/img_gka64.png', 'path': 'stimuli/img_gka64.png'},
    {'name': 'stimuli/img_gqy6z.png', 'path': 'stimuli/img_gqy6z.png'},
    {'name': 'stimuli/img_gsfx4.png', 'path': 'stimuli/img_gsfx4.png'},
    {'name': 'stimuli/img_gv750.png', 'path': 'stimuli/img_gv750.png'},
    {'name': 'stimuli/img_gxm46.png', 'path': 'stimuli/img_gxm46.png'},
    {'name': 'stimuli/img_gztbt.png', 'path': 'stimuli/img_gztbt.png'},
    {'name': 'stimuli/img_h1yyu.png', 'path': 'stimuli/img_h1yyu.png'},
    {'name': 'stimuli/img_h13c3.png', 'path': 'stimuli/img_h13c3.png'},
    {'name': 'stimuli/img_hc49v.png', 'path': 'stimuli/img_hc49v.png'},
    {'name': 'stimuli/img_hfz8w.png', 'path': 'stimuli/img_hfz8w.png'},
    {'name': 'stimuli/img_hmmra.png', 'path': 'stimuli/img_hmmra.png'},
    {'name': 'stimuli/img_huisn.png', 'path': 'stimuli/img_huisn.png'},
    {'name': 'stimuli/img_i2k07.png', 'path': 'stimuli/img_i2k07.png'},
    {'name': 'stimuli/img_i6wsx.png', 'path': 'stimuli/img_i6wsx.png'},
    {'name': 'stimuli/img_i7vab.png', 'path': 'stimuli/img_i7vab.png'},
    {'name': 'stimuli/img_ic3os.png', 'path': 'stimuli/img_ic3os.png'},
    {'name': 'stimuli/img_ifebc.png', 'path': 'stimuli/img_ifebc.png'},
    {'name': 'stimuli/img_ikk62.png', 'path': 'stimuli/img_ikk62.png'},
    {'name': 'stimuli/img_il020.png', 'path': 'stimuli/img_il020.png'},
    {'name': 'stimuli/img_inqod.png', 'path': 'stimuli/img_inqod.png'},
    {'name': 'stimuli/img_iqmdm.png', 'path': 'stimuli/img_iqmdm.png'},
    {'name': 'stimuli/img_iudc4.png', 'path': 'stimuli/img_iudc4.png'},
    {'name': 'stimuli/img_iyxnj.png', 'path': 'stimuli/img_iyxnj.png'},
    {'name': 'stimuli/img_j4ttn.png', 'path': 'stimuli/img_j4ttn.png'},
    {'name': 'stimuli/img_j5rpx.png', 'path': 'stimuli/img_j5rpx.png'},
    {'name': 'stimuli/img_j73b6.png', 'path': 'stimuli/img_j73b6.png'},
    {'name': 'stimuli/img_j856a.png', 'path': 'stimuli/img_j856a.png'},
    {'name': 'stimuli/img_jge7p.png', 'path': 'stimuli/img_jge7p.png'},
    {'name': 'stimuli/img_jivhq.png', 'path': 'stimuli/img_jivhq.png'},
    {'name': 'stimuli/img_jkm86.png', 'path': 'stimuli/img_jkm86.png'},
    {'name': 'stimuli/img_jp28n.png', 'path': 'stimuli/img_jp28n.png'},
    {'name': 'stimuli/img_jpjeg.png', 'path': 'stimuli/img_jpjeg.png'},
    {'name': 'stimuli/img_jpldg.png', 'path': 'stimuli/img_jpldg.png'},
    {'name': 'stimuli/img_jr212.png', 'path': 'stimuli/img_jr212.png'},
    {'name': 'stimuli/img_juob3.png', 'path': 'stimuli/img_juob3.png'},
    {'name': 'stimuli/img_jz3kd.png', 'path': 'stimuli/img_jz3kd.png'},
    {'name': 'stimuli/img_k0ze7.png', 'path': 'stimuli/img_k0ze7.png'},
    {'name': 'stimuli/img_k3abb.png', 'path': 'stimuli/img_k3abb.png'},
    {'name': 'stimuli/img_kljj4.png', 'path': 'stimuli/img_kljj4.png'},
    {'name': 'stimuli/img_kn0we.png', 'path': 'stimuli/img_kn0we.png'},
    {'name': 'stimuli/img_koooi.png', 'path': 'stimuli/img_koooi.png'},
    {'name': 'stimuli/img_kost0.png', 'path': 'stimuli/img_kost0.png'},
    {'name': 'stimuli/img_kq9s9.png', 'path': 'stimuli/img_kq9s9.png'},
    {'name': 'stimuli/img_kugyw.png', 'path': 'stimuli/img_kugyw.png'},
    {'name': 'stimuli/img_kwxq1.png', 'path': 'stimuli/img_kwxq1.png'},
    {'name': 'stimuli/img_kzg3h.png', 'path': 'stimuli/img_kzg3h.png'},
    {'name': 'stimuli/img_l1h36.png', 'path': 'stimuli/img_l1h36.png'},
    {'name': 'stimuli/img_l9t30.png', 'path': 'stimuli/img_l9t30.png'},
    {'name': 'stimuli/img_le8uf.png', 'path': 'stimuli/img_le8uf.png'},
    {'name': 'stimuli/img_lgxzn.png', 'path': 'stimuli/img_lgxzn.png'},
    {'name': 'stimuli/img_lgyo6.png', 'path': 'stimuli/img_lgyo6.png'},
    {'name': 'stimuli/img_lpas9.png', 'path': 'stimuli/img_lpas9.png'},
    {'name': 'stimuli/img_lpj57.png', 'path': 'stimuli/img_lpj57.png'},
    {'name': 'stimuli/img_lpr0l.png', 'path': 'stimuli/img_lpr0l.png'},
    {'name': 'stimuli/img_lszzj.png', 'path': 'stimuli/img_lszzj.png'},
    {'name': 'stimuli/img_lzz3x.png', 'path': 'stimuli/img_lzz3x.png'},
    {'name': 'stimuli/img_mawe6.png', 'path': 'stimuli/img_mawe6.png'},
    {'name': 'stimuli/img_md6k3.png', 'path': 'stimuli/img_md6k3.png'},
    {'name': 'stimuli/img_mdh76.png', 'path': 'stimuli/img_mdh76.png'},
    {'name': 'stimuli/img_mdpr4.png', 'path': 'stimuli/img_mdpr4.png'},
    {'name': 'stimuli/img_mgnmm.png', 'path': 'stimuli/img_mgnmm.png'},
    {'name': 'stimuli/img_mjxmq.png', 'path': 'stimuli/img_mjxmq.png'},
    {'name': 'stimuli/img_mqnl6.png', 'path': 'stimuli/img_mqnl6.png'},
    {'name': 'stimuli/img_mucwi.png', 'path': 'stimuli/img_mucwi.png'},
    {'name': 'stimuli/img_n9xll.png', 'path': 'stimuli/img_n9xll.png'},
    {'name': 'stimuli/img_nb8p4.png', 'path': 'stimuli/img_nb8p4.png'},
    {'name': 'stimuli/img_ncr40.png', 'path': 'stimuli/img_ncr40.png'},
    {'name': 'stimuli/img_njhlh.png', 'path': 'stimuli/img_njhlh.png'},
    {'name': 'stimuli/img_njmgp.png', 'path': 'stimuli/img_njmgp.png'},
    {'name': 'stimuli/img_nyv2b.png', 'path': 'stimuli/img_nyv2b.png'},
    {'name': 'stimuli/img_o30wb.png', 'path': 'stimuli/img_o30wb.png'},
    {'name': 'stimuli/img_o37la.png', 'path': 'stimuli/img_o37la.png'},
    {'name': 'stimuli/img_oau79.png', 'path': 'stimuli/img_oau79.png'},
    {'name': 'stimuli/img_okvvw.png', 'path': 'stimuli/img_okvvw.png'},
    {'name': 'stimuli/img_oou46.png', 'path': 'stimuli/img_oou46.png'},
    {'name': 'stimuli/img_ose78.png', 'path': 'stimuli/img_ose78.png'},
    {'name': 'stimuli/img_oz18d.png', 'path': 'stimuli/img_oz18d.png'},
    {'name': 'stimuli/img_ozxpp.png', 'path': 'stimuli/img_ozxpp.png'},
    {'name': 'stimuli/img_p3hpc.png', 'path': 'stimuli/img_p3hpc.png'},
    {'name': 'stimuli/img_p659z.png', 'path': 'stimuli/img_p659z.png'},
    {'name': 'stimuli/img_pbsj1.png', 'path': 'stimuli/img_pbsj1.png'},
    {'name': 'stimuli/img_pdzf1.png', 'path': 'stimuli/img_pdzf1.png'},
    {'name': 'stimuli/img_pey7u.png', 'path': 'stimuli/img_pey7u.png'},
    {'name': 'stimuli/img_pjfx6.png', 'path': 'stimuli/img_pjfx6.png'},
    {'name': 'stimuli/img_pna7l.png', 'path': 'stimuli/img_pna7l.png'},
    {'name': 'stimuli/img_psgf7.png', 'path': 'stimuli/img_psgf7.png'},
    {'name': 'stimuli/img_pt3d7.png', 'path': 'stimuli/img_pt3d7.png'},
    {'name': 'stimuli/img_q1ynd.png', 'path': 'stimuli/img_q1ynd.png'},
    {'name': 'stimuli/img_q9lab.png', 'path': 'stimuli/img_q9lab.png'},
    {'name': 'stimuli/img_qbdgm.png', 'path': 'stimuli/img_qbdgm.png'},
    {'name': 'stimuli/img_qbkdt.png', 'path': 'stimuli/img_qbkdt.png'},
    {'name': 'stimuli/img_qdln8.png', 'path': 'stimuli/img_qdln8.png'},
    {'name': 'stimuli/img_qgbyn.png', 'path': 'stimuli/img_qgbyn.png'},
    {'name': 'stimuli/img_qihxi.png', 'path': 'stimuli/img_qihxi.png'},
    {'name': 'stimuli/img_qmand.png', 'path': 'stimuli/img_qmand.png'},
    {'name': 'stimuli/img_qmgwq.png', 'path': 'stimuli/img_qmgwq.png'},
    {'name': 'stimuli/img_qrc78.png', 'path': 'stimuli/img_qrc78.png'},
    {'name': 'stimuli/img_qz292.png', 'path': 'stimuli/img_qz292.png'},
    {'name': 'stimuli/img_r2lxk.png', 'path': 'stimuli/img_r2lxk.png'},
    {'name': 'stimuli/img_r10cu.png', 'path': 'stimuli/img_r10cu.png'},
    {'name': 'stimuli/img_ra2nm.png', 'path': 'stimuli/img_ra2nm.png'},
    {'name': 'stimuli/img_rg4in.png', 'path': 'stimuli/img_rg4in.png'},
    {'name': 'stimuli/img_ri0yx.png', 'path': 'stimuli/img_ri0yx.png'},
    {'name': 'stimuli/img_rru0v.png', 'path': 'stimuli/img_rru0v.png'},
    {'name': 'stimuli/img_rvssl.png', 'path': 'stimuli/img_rvssl.png'},
    {'name': 'stimuli/img_rych7.png', 'path': 'stimuli/img_rych7.png'},
    {'name': 'stimuli/img_s2zoe.png', 'path': 'stimuli/img_s2zoe.png'},
    {'name': 'stimuli/img_s9are.png', 'path': 'stimuli/img_s9are.png'},
    {'name': 'stimuli/img_scrdm.png', 'path': 'stimuli/img_scrdm.png'},
    {'name': 'stimuli/img_sfh4b.png', 'path': 'stimuli/img_sfh4b.png'},
    {'name': 'stimuli/img_sltwe.png', 'path': 'stimuli/img_sltwe.png'},
    {'name': 'stimuli/img_swcci.png', 'path': 'stimuli/img_swcci.png'},
    {'name': 'stimuli/img_swq34.png', 'path': 'stimuli/img_swq34.png'},
    {'name': 'stimuli/img_sx68r.png', 'path': 'stimuli/img_sx68r.png'},
    {'name': 'stimuli/img_t1cr9.png', 'path': 'stimuli/img_t1cr9.png'},
    {'name': 'stimuli/img_t2ioc.png', 'path': 'stimuli/img_t2ioc.png'},
    {'name': 'stimuli/img_t4hvr.png', 'path': 'stimuli/img_t4hvr.png'},
    {'name': 'stimuli/img_t90e2.png', 'path': 'stimuli/img_t90e2.png'},
    {'name': 'stimuli/img_tbs4n.png', 'path': 'stimuli/img_tbs4n.png'},
    {'name': 'stimuli/img_th7xh.png', 'path': 'stimuli/img_th7xh.png'},
    {'name': 'stimuli/img_tn8ys.png', 'path': 'stimuli/img_tn8ys.png'},
    {'name': 'stimuli/img_tujn3.png', 'path': 'stimuli/img_tujn3.png'},
    {'name': 'stimuli/img_tv8e2.png', 'path': 'stimuli/img_tv8e2.png'},
    {'name': 'stimuli/img_twj5p.png', 'path': 'stimuli/img_twj5p.png'},
    {'name': 'stimuli/img_u1rxv.png', 'path': 'stimuli/img_u1rxv.png'},
    {'name': 'stimuli/img_u2o6z.png', 'path': 'stimuli/img_u2o6z.png'},
    {'name': 'stimuli/img_u9f9l.png', 'path': 'stimuli/img_u9f9l.png'},
    {'name': 'stimuli/img_ua9bs.png', 'path': 'stimuli/img_ua9bs.png'},
    {'name': 'stimuli/img_ub9nn.png', 'path': 'stimuli/img_ub9nn.png'},
    {'name': 'stimuli/img_uegbb.png', 'path': 'stimuli/img_uegbb.png'},
    {'name': 'stimuli/img_uhmld.png', 'path': 'stimuli/img_uhmld.png'},
    {'name': 'stimuli/img_uspja.png', 'path': 'stimuli/img_uspja.png'},
    {'name': 'stimuli/img_uttnz.png', 'path': 'stimuli/img_uttnz.png'},
    {'name': 'stimuli/img_uwv6y.png', 'path': 'stimuli/img_uwv6y.png'},
    {'name': 'stimuli/img_uxxo0.png', 'path': 'stimuli/img_uxxo0.png'},
    {'name': 'stimuli/img_uy1n4.png', 'path': 'stimuli/img_uy1n4.png'},
    {'name': 'stimuli/img_v8dra.png', 'path': 'stimuli/img_v8dra.png'},
    {'name': 'stimuli/img_vbrb7.png', 'path': 'stimuli/img_vbrb7.png'},
    {'name': 'stimuli/img_vg73h.png', 'path': 'stimuli/img_vg73h.png'},
    {'name': 'stimuli/img_vgaye.png', 'path': 'stimuli/img_vgaye.png'},
    {'name': 'stimuli/img_vgh2g.png', 'path': 'stimuli/img_vgh2g.png'},
    {'name': 'stimuli/img_vh7v8.png', 'path': 'stimuli/img_vh7v8.png'},
    {'name': 'stimuli/img_vnxft.png', 'path': 'stimuli/img_vnxft.png'},
    {'name': 'stimuli/img_w8yhd.png', 'path': 'stimuli/img_w8yhd.png'},
    {'name': 'stimuli/img_wbws6.png', 'path': 'stimuli/img_wbws6.png'},
    {'name': 'stimuli/img_wgddx.png', 'path': 'stimuli/img_wgddx.png'},
    {'name': 'stimuli/img_wgkqa.png', 'path': 'stimuli/img_wgkqa.png'},
    {'name': 'stimuli/img_wijef.png', 'path': 'stimuli/img_wijef.png'},
    {'name': 'stimuli/img_wppku.png', 'path': 'stimuli/img_wppku.png'},
    {'name': 'stimuli/img_wyctg.png', 'path': 'stimuli/img_wyctg.png'},
    {'name': 'stimuli/img_wyl6z.png', 'path': 'stimuli/img_wyl6z.png'},
    {'name': 'stimuli/img_wz6x5.png', 'path': 'stimuli/img_wz6x5.png'},
    {'name': 'stimuli/img_x0u5z.png', 'path': 'stimuli/img_x0u5z.png'},
    {'name': 'stimuli/img_x4bln.png', 'path': 'stimuli/img_x4bln.png'},
    {'name': 'stimuli/img_x9ml4.png', 'path': 'stimuli/img_x9ml4.png'},
    {'name': 'stimuli/img_x9w7o.png', 'path': 'stimuli/img_x9w7o.png'},
    {'name': 'stimuli/img_xbtev.png', 'path': 'stimuli/img_xbtev.png'},
    {'name': 'stimuli/img_xdhz2.png', 'path': 'stimuli/img_xdhz2.png'},
    {'name': 'stimuli/img_xesl0.png', 'path': 'stimuli/img_xesl0.png'},
    {'name': 'stimuli/img_xguy9.png', 'path': 'stimuli/img_xguy9.png'},
    {'name': 'stimuli/img_xpco9.png', 'path': 'stimuli/img_xpco9.png'},
    {'name': 'stimuli/img_xr3up.png', 'path': 'stimuli/img_xr3up.png'},
    {'name': 'stimuli/img_xtb79.png', 'path': 'stimuli/img_xtb79.png'},
    {'name': 'stimuli/img_xti0z.png', 'path': 'stimuli/img_xti0z.png'},
    {'name': 'stimuli/img_xu1p3.png', 'path': 'stimuli/img_xu1p3.png'},
    {'name': 'stimuli/img_xy930.png', 'path': 'stimuli/img_xy930.png'},
    {'name': 'stimuli/img_xzyzy.png', 'path': 'stimuli/img_xzyzy.png'},
    {'name': 'stimuli/img_ybbmx.png', 'path': 'stimuli/img_ybbmx.png'},
    {'name': 'stimuli/img_ye5sl.png', 'path': 'stimuli/img_ye5sl.png'},
    {'name': 'stimuli/img_yeh72.png', 'path': 'stimuli/img_yeh72.png'},
    {'name': 'stimuli/img_ymgcb.png', 'path': 'stimuli/img_ymgcb.png'},
    {'name': 'stimuli/img_yosqb.png', 'path': 'stimuli/img_yosqb.png'},
    {'name': 'stimuli/img_ys3qz.png', 'path': 'stimuli/img_ys3qz.png'},
    {'name': 'stimuli/img_yteqw.png', 'path': 'stimuli/img_yteqw.png'},
    {'name': 'stimuli/img_z3yzz.png', 'path': 'stimuli/img_z3yzz.png'},
    {'name': 'stimuli/img_z4jxm.png', 'path': 'stimuli/img_z4jxm.png'},
    {'name': 'stimuli/img_z5osu.png', 'path': 'stimuli/img_z5osu.png'},
    {'name': 'stimuli/img_z10c7.png', 'path': 'stimuli/img_z10c7.png'},
    {'name': 'stimuli/img_z293c.png', 'path': 'stimuli/img_z293c.png'},
    {'name': 'stimuli/img_zgg62.png', 'path': 'stimuli/img_zgg62.png'},
    {'name': 'stimuli/img_zh8ms.png', 'path': 'stimuli/img_zh8ms.png'},
    {'name': 'stimuli/img_zi8qc.png', 'path': 'stimuli/img_zi8qc.png'},
    {'name': 'stimuli/img_zi682.png', 'path': 'stimuli/img_zi682.png'},
    {'name': 'stimuli/img_zt893.png', 'path': 'stimuli/img_zt893.png'},
    {'name': 'stimuli/img_zv0dq.png', 'path': 'stimuli/img_zv0dq.png'},
    {'name': 'stimuli/img_zxvl3.png', 'path': 'stimuli/img_zxvl3.png'},
    {'name': 'stimuli/train_1.jpg', 'path': 'stimuli/train_1.jpg'},
    {'name': 'stimuli/train_2.jpg', 'path': 'stimuli/train_2.jpg'},
    {'name': 'stimuli/train_3.jpg', 'path': 'stimuli/train_3.jpg'},
    {'name': 'stimuli/train_4.jpg', 'path': 'stimuli/train_4.jpg'},
    {'name': 'stimuli/train_5.jpg', 'path': 'stimuli/train_5.jpg'},
    {'name': 'stimuli/train_6.jpg', 'path': 'stimuli/train_6.jpg'},
    {'name': 'stimuli/train_7.jpg', 'path': 'stimuli/train_7.jpg'},
    {'name': 'stimuli/train_8.jpg', 'path': 'stimuli/train_8.jpg'},
    {'name': 'stimuli/train_9.jpg', 'path': 'stimuli/train_9.jpg'},
    {'name': 'stimuli/train_10.jpg', 'path': 'stimuli/train_10.jpg'},
    {'name': 'stimuli/train_11.jpg', 'path': 'stimuli/train_11.jpg'},
    {'name': 'stimuli/train_12.jpg', 'path': 'stimuli/train_12.jpg'},
    {'name': 'stimuli/train_13.jpg', 'path': 'stimuli/train_13.jpg'},
    {'name': 'stimuli/train_14.jpg', 'path': 'stimuli/train_14.jpg'},
    {'name': 'stimuli/train_15.jpg', 'path': 'stimuli/train_15.jpg'},
    {'name': 'stimuli/train_16.jpg', 'path': 'stimuli/train_16.jpg'},
    {'name': 'stimuli/train_17.jpg', 'path': 'stimuli/train_17.jpg'},
    {'name': 'stimuli/train_18.jpg', 'path': 'stimuli/train_18.jpg'},
    {'name': 'stimuli/train_19.jpg', 'path': 'stimuli/train_19.jpg'},
    {'name': 'stimuli/train_20.jpg', 'path': 'stimuli/train_20.jpg'},
    {'name': 'stimuli/train_x1.jpg', 'path': 'stimuli/train_x1.jpg'},
    {'name': 'stimuli/train_x2.jpg', 'path': 'stimuli/train_x2.jpg'},
    {'name': 'stimuli/train_x3.jpg', 'path': 'stimuli/train_x3.jpg'},
    {'name': 'stimuli/train_x4.jpg', 'path': 'stimuli/train_x4.jpg'},
    {'name': 'stimuli/train_x5.jpg', 'path': 'stimuli/train_x5.jpg'},
    {'name': 'stimuli/train_x6.jpg', 'path': 'stimuli/train_x6.jpg'},
    {'name': 'stimuli/train_x7.jpg', 'path': 'stimuli/train_x7.jpg'},
    {'name': 'stimuli/train_x8.jpg', 'path': 'stimuli/train_x8.jpg'},
    {'name': 'stimuli/train_x9.jpg', 'path': 'stimuli/train_x9.jpg'},
    {'name': 'stimuli/train_x10.jpg', 'path': 'stimuli/train_x10.jpg'},
    {'name': 'conditions_cat_training.xlsx', 'path': 'conditions_cat_training.xlsx'},
    {'name': 'conditions_memo_training.xlsx', 'path': 'conditions_memo_training.xlsx'},
    {'name': 'fixationskreuz.png', 'path': 'fixationskreuz.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.1';
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
var conditions_cat_kitchen_a;
var conditions_cat_kitchen_b;
var conditions_cat_living_a;
var conditions_cat_living_b;
var conditions_cat_sleep_a;
var conditions_cat_sleep_b;
var conditions_memo_kitchen_a;
var conditions_memo_kitchen_b;
var conditions_memo_living_a;
var conditions_memo_living_b;
var conditions_memo_sleep_a;
var conditions_memo_sleep_b;
var conditions_block_order;
var consentClock;
var consent_text;
var consent_resp;
var resources_consent_new;
var data_safetyClock;
var data_safety_text_2;
var data_safety_resp;
var data_safety_2Clock;
var data_safety_2_text_2;
var data_safety_2_resp;
var instructions_catClock;
var instructions_cat_text_2;
var instructions_cat_resp;
var instructions_cat_2Clock;
var instructions_cat_2_text;
var instructions_cat_2_resp;
var category_test_textClock;
var category_test_word;
var fix_categorization_trainingClock;
var fix_cat_training_question;
var fix_cat_training_no;
var fix_cat_training_yes;
var fix_cat_training_pic;
var categorization_trainingClock;
var cat_training_fix;
var cat_training_stim;
var cat_training_key;
var cat_training_question;
var cat_training_no;
var cat_training_yes;
var cat_training_feedbackClock;
var cat_train_feedback_text;
var cat_train_feedb_no;
var cat_train_feedb_yes;
var cat_train_feedb_question;
var instruction_memoClock;
var instructions_memo_text;
var instructions_memo_resp;
var memo_fix_isiClock;
var memo_fix_pic;
var memo_trainingClock;
var memo_training_fix;
var memo_training_stim;
var memo_training_slider;
var memo_training_slider_key_resp;
var memo_training_feedbackClock;
var memo_train_feedb_text;
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
var random_isi_kitchen_no;
var random_isi_kitchen_yes;
var random_isi_kitchen_question;
var kitchen_pictureClock;
var kitchen_fix;
var kitchen_image;
var kitchen_picture_no;
var kitchen_picture_yes;
var kitchen_picture_question;
var kitchen_picture_resp;
var kitchen_a_memo_instrClock;
var kitchen_a_memo_instr_text;
var kitchen_a_memo_instr_resp;
var memotest_taskClock;
var memotest_task_stim;
var memotest_task_slider;
var memotest_task_slider_key_resp;
var kitchen_bClock;
var kitchen_b_text;
var kitchen_b_text_2;
var kitchen_b_resp;
var kitchen_b_block_no;
var kitchen_b_memo_instrClock;
var kitchen_b_memo_instr_text;
var kitchen_b_memo_instr_resp;
var living_aClock;
var living_a_text;
var living_a_text_2;
var living_a_resp;
var living_a_block_no;
var living_random_isiClock;
var living_random_isi_fix;
var living_random_isi_no;
var living_random_isi_yes;
var living_random_isi_question;
var living_pictureClock;
var living_picture_fix;
var living_picture_image;
var living_picture_no;
var living_picture_yes;
var living_picture_resp;
var living_picture_question;
var living_a_memotest_instrClock;
var living_a_memo_instr_text;
var living_a_memo_instr_resp;
var living_bClock;
var living_b_text;
var living_b_text_2;
var living_b_resp;
var living_b_block_no;
var living_b_memotest_instrClock;
var living_b_memo_instr_text;
var living_b_memo_instr_resp;
var bed_aClock;
var bed_a_text;
var bed_a_text_2;
var bed_a_resp;
var bed_a_block_no;
var bed_random_isiClock;
var bed_random_isi_fix;
var bed_random_isi_no;
var bed_random_isi_yes;
var bed_random_isi_question;
var bed_pictureClock;
var bed_picture_fix;
var bed_picture_image;
var bed_picture_no;
var bed_picture_yes;
var bed_picture_resp;
var bed_picture_question;
var bed_a_memotest_instrClock;
var bed_a_memo_instr_text;
var bed_a_memo_instr_resp;
var bed_bClock;
var bed_b_text;
var bed_b_text_2;
var bed_b_resp;
var bed_b_block_no;
var bed_b_memotest_instrClock;
var bed_b_memo_instr_text;
var bed_b_memo_instr_resp;
var middle_breakClock;
var break_text;
var break_resp;
var endClock;
var end_text;
var end_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text',
    text: '-- SceneCat 3 --\n\nWelcome to the experiment\n\nIn this experiment we investigate how photographs of different room categories are perceived and remembered. It will take about 30 minutes.\nPlease take an upright position for the duration of the experiment.\n\nFirst, a declaration of consent and the privacy policy will follow.\n\nPlease note, that you should not leave the fullscreen mode at any time, since the experiment will then terminate automatically.\n\nContinue with SPACE.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  intro_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from conditions_files_code
  participant = expInfo["participant"];
  conditions_cat_kitchen_a = (("input_files/" + participant) + "_scenecat_categorization_kitchens_1.xlsx");
  conditions_cat_kitchen_b = (("input_files/" + participant) + "_scenecat_categorization_kitchens_2.xlsx");
  conditions_cat_living_a = (("input_files/" + participant) + "_scenecat_categorization_living_rooms_1.xlsx");
  conditions_cat_living_b = (("input_files/" + participant) + "_scenecat_categorization_living_rooms_2.xlsx");
  conditions_cat_sleep_a = (("input_files/" + participant) + "_scenecat_categorization_bedrooms_1.xlsx");
  conditions_cat_sleep_b = (("input_files/" + participant) + "_scenecat_categorization_bedrooms_2.xlsx");
  conditions_memo_kitchen_a = (("input_files/" + participant) + "_scenecat_memory_kitchens_1.xlsx");
  conditions_memo_kitchen_b = (("input_files/" + participant) + "_scenecat_memory_kitchens_2.xlsx");
  conditions_memo_living_a = (("input_files/" + participant) + "_scenecat_memory_living_rooms_1.xlsx");
  conditions_memo_living_b = (("input_files/" + participant) + "_scenecat_memory_living_rooms_2.xlsx");
  conditions_memo_sleep_a = (("input_files/" + participant) + "_scenecat_memory_bedrooms_1.xlsx");
  conditions_memo_sleep_b = (("input_files/" + participant) + "_scenecat_memory_bedrooms_2.xlsx");
  conditions_block_order = (("input_files/" + participant) + "_scenecat_block_order.xlsx");
  
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  consent_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_text',
    text: 'Declaration of consent\n\nThank you for participating in our study on image comprehension!\n\nYour participation in this study is voluntary. You are free to discontinue your participation at any time during this study without incurring any disadvantages. \n\nData protection: Your details are of course confidential and will only be stored and evaluated in a completely anonymous form, i.e. without reference to your name or other personal data. Further information can be found in the privacy policy.\n\nQuestions: If you have any questions about this study, you can contact the study director or Prof. Niko Busch (niko.busch@uni-muenster) at any time.\n\nI confirm that I am at least 18 years old, have read and understood this consent form and wish to participate in the study. I have taken note of the privacy policy and voluntarily consent to the collection and further processing of my personal data as described therein. I have been informed of my right to withdraw my consent at any time without giving reasons.\n\nPress SPACE to confirm your participation.\nPress ESC to stop the experiment.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  consent_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  resources_consent_new = {
    status: PsychoJS.Status.NOT_STARTED
  };
  // Initialize components for Routine "data_safety"
  data_safetyClock = new util.Clock();
  data_safety_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'data_safety_text_2',
    text: 'Privacy policy\n\n1. Scope of data collection and processing: In the course of the study, your demographic data (age, gender, handedness) as well as reaction times and correctness of your answers will be collected during the experiment. The data and personal communications collected as part of this study will be treated confidentially. Those employees who have personal data through direct contact with you are subject to a duty of confidentiality.  The data will be collected completely anonymously, i.e. your name will not be asked at any point. The anonymized data is stored for at least 10 years. At the end of the session, your data will be stored without your name, i.e. in anonymized form. From this point on, your data can no longer be associated with your person, i.e. it is no longer possible to identify your data. We can therefore only comply with your request to delete your data until it has been stored in anonymized form. The results and data of this study will be published as a scientific publication. This is done in anonymized form, i.e. without the data being assigned to a specific person. The completely anonymized data of this study will be made available as open data in a secure, internet-based data archive (e.g. OSF, ZPID, GESIS etc.). This study thus follows the recommendations of the German Research Foundation (DFG) and the German Psychological Society (DGPs) for quality assurance in research.\n\n2. legal basis: The legal basis for the processing of the personal data mentioned is consent in accordance with Art. 6 (1) letter a EU GDPR.\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  data_safety_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "data_safety_2"
  data_safety_2Clock = new util.Clock();
  data_safety_2_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'data_safety_2_text_2',
    text: '3. revocation: You have the right to revoke your consent under data protection law at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. (Revocation with effect for the future). Address the revocation to the controller. You will not suffer any disadvantages as a result of the revocation.\n4. name and address of the controller: The controller within the meaning of the EU General Data Protection Regulation (GDPR) and other national data protection laws of the member states as well as other data protection regulations is the University of Münster, represented by the Rector, Prof. Dr. Johannes Wessels, Schlossplatz 2, 48149 Münster, phone: + 49 251 83-0, email: verwaltung@uni-muenster.de. If you have any questions about the content of the project, please contact the specialist contact person directly: Prof. Niko Busch, Tel.: + 49 (0) 251 83 34159, e-mail: niko.busch@uni-muenster.de\n5. contact details of the data protection officer: The data protection officer of the University of Münster is: Nina Meyer-Pachur, Schlossplatz 2, 48149 Münster, phone: + 49 251 83-22446, e-mail: datenschutz@uni-muenster.de\n6. reference to the rights of data subjects: According to the General Data Protection Regulation, you generally have the right to Information (Art 15 GDPR) , objection (Art 21 GDPR), data portability (Art 20 GDPR), erasure (Art 17 GDPR), restriction of processing (Art 18 GDPR), rectification (Art 16 GDPR). If you would like to exercise one of these rights, please contact one of the contact persons listed. You also have the right to lodge a complaint with the supervisory authority: State Commissioner for Data Protection and Freedom of Information North Rhine-Westphalia, Helga Block, Kavalleriestraße 2-4, 40213 Düsseldorf, phone: 02 11/384 24-0, email: poststelle@ldi.nrw.de, website: http://www.ldi.nrw.de\n\nPress SPACE to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  data_safety_2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_cat"
  instructions_catClock = new util.Clock();
  instructions_cat_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_cat_text_2',
    text: 'Experiment Instructions:\n\nThe experiment consists of a practice block and six subsequent blocks, each with two parts.\n\n1. Categorization Task:\n   - At the beginning of each block, you will be given a specific room category (e.g., living room). Your task is to categorize the pictures shown:\n- Press the “f” key as QUICKLY as possible if the picture does NOT belong to the specified category.\n- Press the “j” key as QUICKLY as possible if the picture belongs to the specified category.\n- Speed is very important in this task, so please respond as fast as you can.\n\n2. Memory Test:\n   - In the second part of the block, you will be shown pictures again. Indicate whether each picture was shown in categorization task of the present block and rate your confidence:\n- “Certainly old” (picture was shown before and you are certain)\n- “Rather old” (picture was shown before and you are somewhat certain)\n- “Rather new” (picture was not shown before and you are somewhat certain)\n- “Certainly new” (picture was not shown before and you are certain)\n- Please respond as accurately as possible in this task; speed is not important here.\n\nAdditional Information:\n- A fixation cross will appear in the center of the screen between images in both parts. Please keep your eyes on this position throughout the entire block.\n- There will be a practice block at the beginning, including both parts of the task. After each answer, you will see whether it was correct or incorrect. This will help you understand the task better.\n\nPreparation:\n- Place your fingers on the “f” and “j” keys now.\n\nPress SPACE to continue with the practice block.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.026,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instructions_cat_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_cat_2"
  instructions_cat_2Clock = new util.Clock();
  instructions_cat_2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_cat_2_text',
    text: 'Now the exercise part for the categorization task begins.\n\nWe will show you a text label indicating a category. Next, we will show you a sequence of images. Use the “f”and “j” keys to indicate as quickly as possible for each picture whether the picture belongs to the specified category.\nf = is NOT from that category\nj = YES, is from that category\n\nStart with SPACE. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instructions_cat_2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "category_test_text"
  category_test_textClock = new util.Clock();
  category_test_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'category_test_word',
    text: 'train station',
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
    text: 'Is this a train station?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  fix_cat_training_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cat_training_no',
    text: 'f\n\nno',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  fix_cat_training_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cat_training_yes',
    text: ' j\n\nyes',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
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
    ori : 0.0, pos : [0, 0], size : [0.55, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  cat_training_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  cat_training_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_training_question',
    text: 'Is this a train station?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  cat_training_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_training_no',
    text: 'f\n\nno',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  cat_training_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_training_yes',
    text: ' j\n\nyes',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
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
  
  cat_train_feedb_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_train_feedb_no',
    text: 'f\n\nno',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  cat_train_feedb_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_train_feedb_yes',
    text: ' j\n\nyes',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  cat_train_feedb_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'cat_train_feedb_question',
    text: 'Is this a train station?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "instruction_memo"
  instruction_memoClock = new util.Clock();
  instructions_memo_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_memo_text',
    text: 'Now the exercise part of the memory test begins. \n\nYou will be shown a series of pictures. For each picture, please indicate whether you have seen it before during the previous categorization task. \n\n"Old" means the picture was shown earlier. "New" means the picture was not shown earlier. \n\nAdditionally, please rate your confidence in your answer.\n\nPress SPACE to start a test run.',
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
    ori : 0.0, pos : [0, 0], size : [0.55, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  memo_training_slider = new visual.Slider({
    win: psychoJS.window, name: 'memo_training_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0, (- 0.325)], ori: 0.0, units: psychoJS.window.units,
    labels: ["d \n certainly old", "f \n rather old", "j \n rather new", "k \n certainly new"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color([1.0, 1.0, 1.0]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  memo_training_slider_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  
  // Initialize components for Routine "start_categorization"
  start_categorizationClock = new util.Clock();
  start_cat_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_cat_text',
    text: 'The test block is finished.\n\nDuring the following task, you will no longer be shown any feedback as to whether you have answered correctly or incorrectly.\n\nPress the SPACE to start the experiment.',
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
    text: 'kitchen',
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
    text: 'Press SPACE to start block\n\n\n\nfrom 6.',
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
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
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
  random_isi_kitchen_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'random_isi_kitchen_no',
    text: 'f\n\nno',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  random_isi_kitchen_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'random_isi_kitchen_yes',
    text: ' j\n\nyes',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  random_isi_kitchen_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'random_isi_kitchen_question',
    text: 'Is this a kitchen?',
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
    ori : 0.0, pos : [0, 0], size : [0.55, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  kitchen_picture_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_picture_no',
    text: 'f\n\nno',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  kitchen_picture_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_picture_yes',
    text: ' j\n\nyes',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  kitchen_picture_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_picture_question',
    text: 'Is this a kitchen?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  kitchen_picture_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "kitchen_a_memo_instr"
  kitchen_a_memo_instrClock = new util.Clock();
  kitchen_a_memo_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_a_memo_instr_text',
    text: 'Now the memory test starts for the kitchen category.\n\nPress SPACE to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  kitchen_a_memo_instr_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "memotest_task"
  memotest_taskClock = new util.Clock();
  memotest_task_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'memotest_task_stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.55, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  memotest_task_slider = new visual.Slider({
    win: psychoJS.window, name: 'memotest_task_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0, (- 0.325)], ori: 0.0, units: psychoJS.window.units,
    labels: ["d \n certainly old", "f \n rather old", "j \n rather new", "k \n certainly new"], fontSize: 0.03, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color([1.0, 1.0, 1.0]), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  memotest_task_slider_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "kitchen_b"
  kitchen_bClock = new util.Clock();
  kitchen_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_b_text',
    text: 'kitchen',
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
    text: 'Press SPACE to start block\n\n\n\nfrom 6.',
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
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "kitchen_b_memo_instr"
  kitchen_b_memo_instrClock = new util.Clock();
  kitchen_b_memo_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'kitchen_b_memo_instr_text',
    text: 'Now the memory test starts for the kitchen category.\n\nPress SPACE to start.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  kitchen_b_memo_instr_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "living_a"
  living_aClock = new util.Clock();
  living_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_a_text',
    text: 'living room',
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
    text: 'Press SPACE to start block\n\n\n\nfrom 6.',
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
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
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
  living_random_isi_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_random_isi_no',
    text: 'f\n\nno',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  living_random_isi_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_random_isi_yes',
    text: ' j\n\nyes',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  living_random_isi_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_random_isi_question',
    text: 'Is this a living room?',
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
    ori : 0.0, pos : [0, 0], size : [0.55, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  living_picture_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_picture_no',
    text: 'f\n\nno',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  living_picture_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_picture_yes',
    text: ' j\n\nyes',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  living_picture_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  living_picture_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_picture_question',
    text: 'Is this a living room?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "living_a_memotest_instr"
  living_a_memotest_instrClock = new util.Clock();
  living_a_memo_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_a_memo_instr_text',
    text: 'Now the memory test starts for the living room category.\n\nPress SPACE to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  living_a_memo_instr_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "living_b"
  living_bClock = new util.Clock();
  living_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_b_text',
    text: 'living room',
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
    text: 'Press SPACE to start block\n\n\n\nfrom 6.',
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
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "living_b_memotest_instr"
  living_b_memotest_instrClock = new util.Clock();
  living_b_memo_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_b_memo_instr_text',
    text: 'Now the memory test starts for the living room category.\n\nPress SPACE to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  living_b_memo_instr_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "bed_a"
  bed_aClock = new util.Clock();
  bed_a_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_a_text',
    text: 'bedroom',
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
    text: 'Press SPACE to start block\n\n\n\nfrom 6.',
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
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "bed_random_isi"
  bed_random_isiClock = new util.Clock();
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
  bed_random_isi_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_random_isi_no',
    text: 'f\n\nno',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  bed_random_isi_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_random_isi_yes',
    text: ' j\n\nyes',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  bed_random_isi_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_random_isi_question',
    text: 'Is this a bedroom?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "bed_picture"
  bed_pictureClock = new util.Clock();
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
    ori : 0.0, pos : [0, 0], size : [0.55, 0.55],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  bed_picture_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_picture_no',
    text: 'f\n\nno',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  bed_picture_yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_picture_yes',
    text: ' j\n\nyes',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  bed_picture_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  bed_picture_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_picture_question',
    text: 'Is this a bedroom?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "bed_a_memotest_instr"
  bed_a_memotest_instrClock = new util.Clock();
  bed_a_memo_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_a_memo_instr_text',
    text: 'Now the memory test starts for the bedroom category.\n\nPress SPACE to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  bed_a_memo_instr_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "bed_b"
  bed_bClock = new util.Clock();
  bed_b_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_b_text',
    text: 'bedroom',
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
    text: 'Press SPACE to start block\n\n\n\nfrom 6.',
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
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "bed_b_memotest_instr"
  bed_b_memotest_instrClock = new util.Clock();
  bed_b_memo_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bed_b_memo_instr_text',
    text: 'Now the memory test starts for the bedroom category.\n\nPress SPACE to start.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  bed_b_memo_instr_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "middle_break"
  middle_breakClock = new util.Clock();
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: 'This block of the experiment is finished.\n\nPress SPACE to start the next block.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  break_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '-- SceneCat 3 --\n\nThank you for your participation!\n\nPress SPACE to end the experiment.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
    consentComponents.push(consent_resp);
    consentComponents.push(resources_consent_new);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent' ---
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_text* updates
    if (t >= 0 && consent_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_text.tStart = t;  // (not accounting for frame time here)
      consent_text.frameNStart = frameN;  // exact frame index
      
      consent_text.setAutoDraw(true);
    }
    
    
    // *consent_resp* updates
    if (t >= 2 && consent_resp.status === PsychoJS.Status.NOT_STARTED) {
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
    
    // start downloading resources specified by component resources_consent_new
    if (t >= 0 && resources_consent_new.status === PsychoJS.Status.NOT_STARTED) {
      console.log('register and start downloading resources specified by component resources_consent_new');
      psychoJS.serverManager.prepareResources([conditions_cat_sleep_b, conditions_cat_sleep_a, conditions_cat_living_b, conditions_cat_living_a, conditions_cat_kitchen_b, conditions_cat_kitchen_a, conditions_memo_living_b, conditions_memo_sleep_b, conditions_memo_sleep_a, conditions_memo_living_a, conditions_memo_kitchen_b, conditions_memo_kitchen_a, conditions_block_order]);
      resources_consent_new.status = PsychoJS.Status.STARTED;
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
    
    // *data_safety_text_2* updates
    if (t >= 0 && data_safety_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      data_safety_text_2.tStart = t;  // (not accounting for frame time here)
      data_safety_text_2.frameNStart = frameN;  // exact frame index
      
      data_safety_text_2.setAutoDraw(true);
    }
    
    
    // *data_safety_resp* updates
    if (t >= 0 && data_safety_resp.status === PsychoJS.Status.NOT_STARTED) {
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
    
    // *data_safety_2_text_2* updates
    if (t >= 0 && data_safety_2_text_2.status === PsychoJS.Status.NOT_STARTED) {
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
    
    // *instructions_cat_text_2* updates
    if (t >= 0 && instructions_cat_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_cat_text_2.tStart = t;  // (not accounting for frame time here)
      instructions_cat_text_2.frameNStart = frameN;  // exact frame index
      
      instructions_cat_text_2.setAutoDraw(true);
    }
    
    
    // *instructions_cat_resp* updates
    if (t >= 0 && instructions_cat_resp.status === PsychoJS.Status.NOT_STARTED) {
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


var _instructions_cat_2_resp_allKeys;
var instructions_cat_2Components;
function instructions_cat_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_cat_2' ---
    t = 0;
    instructions_cat_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instructions_cat_2.started', globalClock.getTime());
    instructions_cat_2_resp.keys = undefined;
    instructions_cat_2_resp.rt = undefined;
    _instructions_cat_2_resp_allKeys = [];
    // keep track of which components have finished
    instructions_cat_2Components = [];
    instructions_cat_2Components.push(instructions_cat_2_text);
    instructions_cat_2Components.push(instructions_cat_2_resp);
    
    for (const thisComponent of instructions_cat_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_cat_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_cat_2' ---
    // get current time
    t = instructions_cat_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_cat_2_text* updates
    if (t >= 0.0 && instructions_cat_2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_cat_2_text.tStart = t;  // (not accounting for frame time here)
      instructions_cat_2_text.frameNStart = frameN;  // exact frame index
      
      instructions_cat_2_text.setAutoDraw(true);
    }
    
    
    // *instructions_cat_2_resp* updates
    if (t >= 0.0 && instructions_cat_2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_cat_2_resp.tStart = t;  // (not accounting for frame time here)
      instructions_cat_2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_cat_2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_cat_2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_cat_2_resp.clearEvents(); });
    }
    
    if (instructions_cat_2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_cat_2_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_cat_2_resp_allKeys = _instructions_cat_2_resp_allKeys.concat(theseKeys);
      if (_instructions_cat_2_resp_allKeys.length > 0) {
        instructions_cat_2_resp.keys = _instructions_cat_2_resp_allKeys[_instructions_cat_2_resp_allKeys.length - 1].name;  // just the last key pressed
        instructions_cat_2_resp.rt = _instructions_cat_2_resp_allKeys[_instructions_cat_2_resp_allKeys.length - 1].rt;
        instructions_cat_2_resp.duration = _instructions_cat_2_resp_allKeys[_instructions_cat_2_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of instructions_cat_2Components)
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


function instructions_cat_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_cat_2' ---
    for (const thisComponent of instructions_cat_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_cat_2.stopped', globalClock.getTime());
    instructions_cat_2_resp.stop();
    // the Routine "instructions_cat_2" was not non-slip safe, so reset the non-slip timer
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


var frameRemains;
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
      const kitchen_a_memotestLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(kitchen_a_memotestLoopBegin(kitchen_a_memotestLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(kitchen_a_memotestLoopScheduler);
      categorization_trialsLoopScheduler.add(kitchen_a_memotestLoopEnd);
      const kitchen_b_categorization_trialsLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(kitchen_b_categorization_trialsLoopBegin(kitchen_b_categorization_trialsLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(kitchen_b_categorization_trialsLoopScheduler);
      categorization_trialsLoopScheduler.add(kitchen_b_categorization_trialsLoopEnd);
      const kitchen_b_memotestLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(kitchen_b_memotestLoopBegin(kitchen_b_memotestLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(kitchen_b_memotestLoopScheduler);
      categorization_trialsLoopScheduler.add(kitchen_b_memotestLoopEnd);
      const living_a_categorization_trialsLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(living_a_categorization_trialsLoopBegin(living_a_categorization_trialsLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(living_a_categorization_trialsLoopScheduler);
      categorization_trialsLoopScheduler.add(living_a_categorization_trialsLoopEnd);
      const living_a_memotestLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(living_a_memotestLoopBegin(living_a_memotestLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(living_a_memotestLoopScheduler);
      categorization_trialsLoopScheduler.add(living_a_memotestLoopEnd);
      const living_b_categorization_trialsLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(living_b_categorization_trialsLoopBegin(living_b_categorization_trialsLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(living_b_categorization_trialsLoopScheduler);
      categorization_trialsLoopScheduler.add(living_b_categorization_trialsLoopEnd);
      const living_b_memotestLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(living_b_memotestLoopBegin(living_b_memotestLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(living_b_memotestLoopScheduler);
      categorization_trialsLoopScheduler.add(living_b_memotestLoopEnd);
      const bed_a_categorization_trialsLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(bed_a_categorization_trialsLoopBegin(bed_a_categorization_trialsLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(bed_a_categorization_trialsLoopScheduler);
      categorization_trialsLoopScheduler.add(bed_a_categorization_trialsLoopEnd);
      const bed_a_memotestLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(bed_a_memotestLoopBegin(bed_a_memotestLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(bed_a_memotestLoopScheduler);
      categorization_trialsLoopScheduler.add(bed_a_memotestLoopEnd);
      const bed_b_categorization_trialsLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(bed_b_categorization_trialsLoopBegin(bed_b_categorization_trialsLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(bed_b_categorization_trialsLoopScheduler);
      categorization_trialsLoopScheduler.add(bed_b_categorization_trialsLoopEnd);
      const bed_b_memotestLoopScheduler = new Scheduler(psychoJS);
      categorization_trialsLoopScheduler.add(bed_b_memotestLoopBegin(bed_b_memotestLoopScheduler, snapshot));
      categorization_trialsLoopScheduler.add(bed_b_memotestLoopScheduler);
      categorization_trialsLoopScheduler.add(bed_b_memotestLoopEnd);
      categorization_trialsLoopScheduler.add(middle_breakRoutineBegin(snapshot));
      categorization_trialsLoopScheduler.add(middle_breakRoutineEachFrame());
      categorization_trialsLoopScheduler.add(middle_breakRoutineEnd(snapshot));
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
      nReps: kitchens_1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_cat_kitchen_a,
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


var kitchen_a_memotest;
function kitchen_a_memotestLoopBegin(kitchen_a_memotestLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    kitchen_a_memotest = new TrialHandler({
      psychoJS: psychoJS,
      nReps: kitchens_1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_memo_kitchen_a,
      seed: undefined, name: 'kitchen_a_memotest'
    });
    psychoJS.experiment.addLoop(kitchen_a_memotest); // add the loop to the experiment
    currentLoop = kitchen_a_memotest;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisKitchen_a_memotest of kitchen_a_memotest) {
      snapshot = kitchen_a_memotest.getSnapshot();
      kitchen_a_memotestLoopScheduler.add(importConditions(snapshot));
      kitchen_a_memotestLoopScheduler.add(kitchen_a_memo_instrRoutineBegin(snapshot));
      kitchen_a_memotestLoopScheduler.add(kitchen_a_memo_instrRoutineEachFrame());
      kitchen_a_memotestLoopScheduler.add(kitchen_a_memo_instrRoutineEnd(snapshot));
      kitchen_a_memotestLoopScheduler.add(memo_fix_isiRoutineBegin(snapshot));
      kitchen_a_memotestLoopScheduler.add(memo_fix_isiRoutineEachFrame());
      kitchen_a_memotestLoopScheduler.add(memo_fix_isiRoutineEnd(snapshot));
      kitchen_a_memotestLoopScheduler.add(memotest_taskRoutineBegin(snapshot));
      kitchen_a_memotestLoopScheduler.add(memotest_taskRoutineEachFrame());
      kitchen_a_memotestLoopScheduler.add(memotest_taskRoutineEnd(snapshot));
      kitchen_a_memotestLoopScheduler.add(kitchen_a_memotestLoopEndIteration(kitchen_a_memotestLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function kitchen_a_memotestLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(kitchen_a_memotest);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function kitchen_a_memotestLoopEndIteration(scheduler, snapshot) {
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
      nReps: kitchens_2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_cat_kitchen_b,
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


var kitchen_b_memotest;
function kitchen_b_memotestLoopBegin(kitchen_b_memotestLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    kitchen_b_memotest = new TrialHandler({
      psychoJS: psychoJS,
      nReps: kitchens_2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_memo_kitchen_b,
      seed: undefined, name: 'kitchen_b_memotest'
    });
    psychoJS.experiment.addLoop(kitchen_b_memotest); // add the loop to the experiment
    currentLoop = kitchen_b_memotest;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisKitchen_b_memotest of kitchen_b_memotest) {
      snapshot = kitchen_b_memotest.getSnapshot();
      kitchen_b_memotestLoopScheduler.add(importConditions(snapshot));
      kitchen_b_memotestLoopScheduler.add(kitchen_b_memo_instrRoutineBegin(snapshot));
      kitchen_b_memotestLoopScheduler.add(kitchen_b_memo_instrRoutineEachFrame());
      kitchen_b_memotestLoopScheduler.add(kitchen_b_memo_instrRoutineEnd(snapshot));
      kitchen_b_memotestLoopScheduler.add(memo_fix_isiRoutineBegin(snapshot));
      kitchen_b_memotestLoopScheduler.add(memo_fix_isiRoutineEachFrame());
      kitchen_b_memotestLoopScheduler.add(memo_fix_isiRoutineEnd(snapshot));
      kitchen_b_memotestLoopScheduler.add(memotest_taskRoutineBegin(snapshot));
      kitchen_b_memotestLoopScheduler.add(memotest_taskRoutineEachFrame());
      kitchen_b_memotestLoopScheduler.add(memotest_taskRoutineEnd(snapshot));
      kitchen_b_memotestLoopScheduler.add(kitchen_b_memotestLoopEndIteration(kitchen_b_memotestLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function kitchen_b_memotestLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(kitchen_b_memotest);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function kitchen_b_memotestLoopEndIteration(scheduler, snapshot) {
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
      nReps: living_rooms_1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_cat_living_a,
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


var living_a_memotest;
function living_a_memotestLoopBegin(living_a_memotestLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    living_a_memotest = new TrialHandler({
      psychoJS: psychoJS,
      nReps: living_rooms_1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_memo_living_a,
      seed: undefined, name: 'living_a_memotest'
    });
    psychoJS.experiment.addLoop(living_a_memotest); // add the loop to the experiment
    currentLoop = living_a_memotest;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLiving_a_memotest of living_a_memotest) {
      snapshot = living_a_memotest.getSnapshot();
      living_a_memotestLoopScheduler.add(importConditions(snapshot));
      living_a_memotestLoopScheduler.add(living_a_memotest_instrRoutineBegin(snapshot));
      living_a_memotestLoopScheduler.add(living_a_memotest_instrRoutineEachFrame());
      living_a_memotestLoopScheduler.add(living_a_memotest_instrRoutineEnd(snapshot));
      living_a_memotestLoopScheduler.add(memo_fix_isiRoutineBegin(snapshot));
      living_a_memotestLoopScheduler.add(memo_fix_isiRoutineEachFrame());
      living_a_memotestLoopScheduler.add(memo_fix_isiRoutineEnd(snapshot));
      living_a_memotestLoopScheduler.add(memotest_taskRoutineBegin(snapshot));
      living_a_memotestLoopScheduler.add(memotest_taskRoutineEachFrame());
      living_a_memotestLoopScheduler.add(memotest_taskRoutineEnd(snapshot));
      living_a_memotestLoopScheduler.add(living_a_memotestLoopEndIteration(living_a_memotestLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function living_a_memotestLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(living_a_memotest);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function living_a_memotestLoopEndIteration(scheduler, snapshot) {
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
      nReps: living_rooms_2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_cat_living_b,
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


var living_b_memotest;
function living_b_memotestLoopBegin(living_b_memotestLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    living_b_memotest = new TrialHandler({
      psychoJS: psychoJS,
      nReps: living_rooms_2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_memo_living_b,
      seed: undefined, name: 'living_b_memotest'
    });
    psychoJS.experiment.addLoop(living_b_memotest); // add the loop to the experiment
    currentLoop = living_b_memotest;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLiving_b_memotest of living_b_memotest) {
      snapshot = living_b_memotest.getSnapshot();
      living_b_memotestLoopScheduler.add(importConditions(snapshot));
      living_b_memotestLoopScheduler.add(living_b_memotest_instrRoutineBegin(snapshot));
      living_b_memotestLoopScheduler.add(living_b_memotest_instrRoutineEachFrame());
      living_b_memotestLoopScheduler.add(living_b_memotest_instrRoutineEnd(snapshot));
      living_b_memotestLoopScheduler.add(memo_fix_isiRoutineBegin(snapshot));
      living_b_memotestLoopScheduler.add(memo_fix_isiRoutineEachFrame());
      living_b_memotestLoopScheduler.add(memo_fix_isiRoutineEnd(snapshot));
      living_b_memotestLoopScheduler.add(memotest_taskRoutineBegin(snapshot));
      living_b_memotestLoopScheduler.add(memotest_taskRoutineEachFrame());
      living_b_memotestLoopScheduler.add(memotest_taskRoutineEnd(snapshot));
      living_b_memotestLoopScheduler.add(living_b_memotestLoopEndIteration(living_b_memotestLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function living_b_memotestLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(living_b_memotest);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function living_b_memotestLoopEndIteration(scheduler, snapshot) {
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
      nReps: bedrooms_1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_cat_sleep_a,
      seed: undefined, name: 'bed_a_categorization_trials'
    });
    psychoJS.experiment.addLoop(bed_a_categorization_trials); // add the loop to the experiment
    currentLoop = bed_a_categorization_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBed_a_categorization_trial of bed_a_categorization_trials) {
      snapshot = bed_a_categorization_trials.getSnapshot();
      bed_a_categorization_trialsLoopScheduler.add(importConditions(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(bed_aRoutineBegin(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(bed_aRoutineEachFrame());
      bed_a_categorization_trialsLoopScheduler.add(bed_aRoutineEnd(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(bed_random_isiRoutineBegin(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(bed_random_isiRoutineEachFrame());
      bed_a_categorization_trialsLoopScheduler.add(bed_random_isiRoutineEnd(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(bed_pictureRoutineBegin(snapshot));
      bed_a_categorization_trialsLoopScheduler.add(bed_pictureRoutineEachFrame());
      bed_a_categorization_trialsLoopScheduler.add(bed_pictureRoutineEnd(snapshot));
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


var bed_a_memotest;
function bed_a_memotestLoopBegin(bed_a_memotestLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    bed_a_memotest = new TrialHandler({
      psychoJS: psychoJS,
      nReps: bedrooms_1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_memo_sleep_a,
      seed: undefined, name: 'bed_a_memotest'
    });
    psychoJS.experiment.addLoop(bed_a_memotest); // add the loop to the experiment
    currentLoop = bed_a_memotest;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBed_a_memotest of bed_a_memotest) {
      snapshot = bed_a_memotest.getSnapshot();
      bed_a_memotestLoopScheduler.add(importConditions(snapshot));
      bed_a_memotestLoopScheduler.add(bed_a_memotest_instrRoutineBegin(snapshot));
      bed_a_memotestLoopScheduler.add(bed_a_memotest_instrRoutineEachFrame());
      bed_a_memotestLoopScheduler.add(bed_a_memotest_instrRoutineEnd(snapshot));
      bed_a_memotestLoopScheduler.add(memo_fix_isiRoutineBegin(snapshot));
      bed_a_memotestLoopScheduler.add(memo_fix_isiRoutineEachFrame());
      bed_a_memotestLoopScheduler.add(memo_fix_isiRoutineEnd(snapshot));
      bed_a_memotestLoopScheduler.add(memotest_taskRoutineBegin(snapshot));
      bed_a_memotestLoopScheduler.add(memotest_taskRoutineEachFrame());
      bed_a_memotestLoopScheduler.add(memotest_taskRoutineEnd(snapshot));
      bed_a_memotestLoopScheduler.add(bed_a_memotestLoopEndIteration(bed_a_memotestLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function bed_a_memotestLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(bed_a_memotest);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function bed_a_memotestLoopEndIteration(scheduler, snapshot) {
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
      nReps: bedrooms_2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_cat_sleep_b,
      seed: undefined, name: 'bed_b_categorization_trials'
    });
    psychoJS.experiment.addLoop(bed_b_categorization_trials); // add the loop to the experiment
    currentLoop = bed_b_categorization_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBed_b_categorization_trial of bed_b_categorization_trials) {
      snapshot = bed_b_categorization_trials.getSnapshot();
      bed_b_categorization_trialsLoopScheduler.add(importConditions(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(bed_bRoutineBegin(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(bed_bRoutineEachFrame());
      bed_b_categorization_trialsLoopScheduler.add(bed_bRoutineEnd(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(bed_random_isiRoutineBegin(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(bed_random_isiRoutineEachFrame());
      bed_b_categorization_trialsLoopScheduler.add(bed_random_isiRoutineEnd(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(bed_pictureRoutineBegin(snapshot));
      bed_b_categorization_trialsLoopScheduler.add(bed_pictureRoutineEachFrame());
      bed_b_categorization_trialsLoopScheduler.add(bed_pictureRoutineEnd(snapshot));
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


var bed_b_memotest;
function bed_b_memotestLoopBegin(bed_b_memotestLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    bed_b_memotest = new TrialHandler({
      psychoJS: psychoJS,
      nReps: bedrooms_2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_memo_sleep_b,
      seed: undefined, name: 'bed_b_memotest'
    });
    psychoJS.experiment.addLoop(bed_b_memotest); // add the loop to the experiment
    currentLoop = bed_b_memotest;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBed_b_memotest of bed_b_memotest) {
      snapshot = bed_b_memotest.getSnapshot();
      bed_b_memotestLoopScheduler.add(importConditions(snapshot));
      bed_b_memotestLoopScheduler.add(bed_b_memotest_instrRoutineBegin(snapshot));
      bed_b_memotestLoopScheduler.add(bed_b_memotest_instrRoutineEachFrame());
      bed_b_memotestLoopScheduler.add(bed_b_memotest_instrRoutineEnd(snapshot));
      bed_b_memotestLoopScheduler.add(memo_fix_isiRoutineBegin(snapshot));
      bed_b_memotestLoopScheduler.add(memo_fix_isiRoutineEachFrame());
      bed_b_memotestLoopScheduler.add(memo_fix_isiRoutineEnd(snapshot));
      bed_b_memotestLoopScheduler.add(memotest_taskRoutineBegin(snapshot));
      bed_b_memotestLoopScheduler.add(memotest_taskRoutineEachFrame());
      bed_b_memotestLoopScheduler.add(memotest_taskRoutineEnd(snapshot));
      bed_b_memotestLoopScheduler.add(bed_b_memotestLoopEndIteration(bed_b_memotestLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function bed_b_memotestLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(bed_b_memotest);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function bed_b_memotestLoopEndIteration(scheduler, snapshot) {
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
    time = 0.9 + Math.random();
    // keep track of which components have finished
    fix_categorization_trainingComponents = [];
    fix_categorization_trainingComponents.push(fix_cat_training_question);
    fix_categorization_trainingComponents.push(fix_cat_training_no);
    fix_categorization_trainingComponents.push(fix_cat_training_yes);
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
    categorization_trainingComponents.push(cat_training_no);
    categorization_trainingComponents.push(cat_training_yes);
    
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
    if (t >= 0 && cat_training_key.status === PsychoJS.Status.NOT_STARTED) {
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
    
    
    // *cat_training_no* updates
    if (t >= 0.0 && cat_training_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_training_no.tStart = t;  // (not accounting for frame time here)
      cat_training_no.frameNStart = frameN;  // exact frame index
      
      cat_training_no.setAutoDraw(true);
    }
    
    
    // *cat_training_yes* updates
    if (t >= 0.0 && cat_training_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_training_yes.tStart = t;  // (not accounting for frame time here)
      cat_training_yes.frameNStart = frameN;  // exact frame index
      
      cat_training_yes.setAutoDraw(true);
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
        cat_training_feedb_eval = "correct";
    } else {
        cat_training_feedb_eval = "wrong";
    }
    
    cat_train_feedback_text.setText(cat_training_feedb_eval);
    // keep track of which components have finished
    cat_training_feedbackComponents = [];
    cat_training_feedbackComponents.push(cat_train_feedback_text);
    cat_training_feedbackComponents.push(cat_train_feedb_no);
    cat_training_feedbackComponents.push(cat_train_feedb_yes);
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
    if (t >= 0 && cat_train_feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cat_train_feedback_text.tStart = t;  // (not accounting for frame time here)
      cat_train_feedback_text.frameNStart = frameN;  // exact frame index
      
      cat_train_feedback_text.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cat_train_feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cat_train_feedback_text.setAutoDraw(false);
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
    // Run 'Begin Routine' code from random_isi_code_memo
    time = 0.2 + Math.random();
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


var _memo_training_slider_key_resp_allKeys;
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
    memo_training_slider_key_resp.keys = undefined;
    memo_training_slider_key_resp.rt = undefined;
    _memo_training_slider_key_resp_allKeys = [];
    // keep track of which components have finished
    memo_trainingComponents = [];
    memo_trainingComponents.push(memo_training_fix);
    memo_trainingComponents.push(memo_training_stim);
    memo_trainingComponents.push(memo_training_slider);
    memo_trainingComponents.push(memo_training_slider_key_resp);
    
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
    
    
    // *memo_training_slider* updates
    if (t >= 0.0 && memo_training_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memo_training_slider.tStart = t;  // (not accounting for frame time here)
      memo_training_slider.frameNStart = frameN;  // exact frame index
      
      memo_training_slider.setAutoDraw(true);
    }
    
    
    // *memo_training_slider_key_resp* updates
    if (t >= 0.0 && memo_training_slider_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memo_training_slider_key_resp.tStart = t;  // (not accounting for frame time here)
      memo_training_slider_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { memo_training_slider_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { memo_training_slider_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { memo_training_slider_key_resp.clearEvents(); });
    }
    
    if (memo_training_slider_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = memo_training_slider_key_resp.getKeys({keyList: ['d', 'f', 'j', 'k'], waitRelease: false});
      _memo_training_slider_key_resp_allKeys = _memo_training_slider_key_resp_allKeys.concat(theseKeys);
      if (_memo_training_slider_key_resp_allKeys.length > 0) {
        memo_training_slider_key_resp.keys = _memo_training_slider_key_resp_allKeys[0].name;  // just the first key pressed
        memo_training_slider_key_resp.rt = _memo_training_slider_key_resp_allKeys[0].rt;
        memo_training_slider_key_resp.duration = _memo_training_slider_key_resp_allKeys[0].duration;
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
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(memo_training_slider_key_resp.corr, level);
    }
    psychoJS.experiment.addData('memo_training_slider_key_resp.keys', memo_training_slider_key_resp.keys);
    if (typeof memo_training_slider_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('memo_training_slider_key_resp.rt', memo_training_slider_key_resp.rt);
        psychoJS.experiment.addData('memo_training_slider_key_resp.duration', memo_training_slider_key_resp.duration);
        routineTimer.reset();
        }
    
    memo_training_slider_key_resp.stop();
    // the Routine "memo_training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


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
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from memo_train_feedb_code
    if ((memo_training_slider_key_resp.keys == 'd' || memo_training_slider_key_resp.keys == 'f')) {
        rating = 1;
    }   else {
        rating = 3;
    }
    
    if (rating == correct_1) {
        memo_train_feedb_eval = 'correct';
    } else {
        memo_train_feedb_eval = 'wrong';
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
    if (t >= 0 && memo_train_feedb_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memo_train_feedb_text.tStart = t;  // (not accounting for frame time here)
      memo_train_feedb_text.frameNStart = frameN;  // exact frame index
      
      memo_train_feedb_text.setAutoDraw(true);
    }
    
    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    kitchen_a_block_no.setText(block_total);
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
    time = 0.9 + Math.random();
    
    // keep track of which components have finished
    kitchen_random_isiComponents = [];
    kitchen_random_isiComponents.push(random_isi_kitchen_fix);
    kitchen_random_isiComponents.push(random_isi_kitchen_no);
    kitchen_random_isiComponents.push(random_isi_kitchen_yes);
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
    kitchen_pictureComponents.push(kitchen_picture_no);
    kitchen_pictureComponents.push(kitchen_picture_yes);
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
    
    
    // *kitchen_picture_no* updates
    if (t >= 0.0 && kitchen_picture_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_picture_no.tStart = t;  // (not accounting for frame time here)
      kitchen_picture_no.frameNStart = frameN;  // exact frame index
      
      kitchen_picture_no.setAutoDraw(true);
    }
    
    
    // *kitchen_picture_yes* updates
    if (t >= 0.0 && kitchen_picture_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_picture_yes.tStart = t;  // (not accounting for frame time here)
      kitchen_picture_yes.frameNStart = frameN;  // exact frame index
      
      kitchen_picture_yes.setAutoDraw(true);
    }
    
    
    // *kitchen_picture_question* updates
    if (t >= 0.0 && kitchen_picture_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_picture_question.tStart = t;  // (not accounting for frame time here)
      kitchen_picture_question.frameNStart = frameN;  // exact frame index
      
      kitchen_picture_question.setAutoDraw(true);
    }
    
    
    // *kitchen_picture_resp* updates
    if (t >= 0 && kitchen_picture_resp.status === PsychoJS.Status.NOT_STARTED) {
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


var _kitchen_a_memo_instr_resp_allKeys;
var kitchen_a_memo_instrComponents;
function kitchen_a_memo_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'kitchen_a_memo_instr' ---
    t = 0;
    kitchen_a_memo_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((kitchen_a_memotest.thisN > 0));
    kitchen_a_memo_instr_resp.keys = undefined;
    kitchen_a_memo_instr_resp.rt = undefined;
    _kitchen_a_memo_instr_resp_allKeys = [];
    // keep track of which components have finished
    kitchen_a_memo_instrComponents = [];
    kitchen_a_memo_instrComponents.push(kitchen_a_memo_instr_text);
    kitchen_a_memo_instrComponents.push(kitchen_a_memo_instr_resp);
    
    for (const thisComponent of kitchen_a_memo_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function kitchen_a_memo_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'kitchen_a_memo_instr' ---
    // get current time
    t = kitchen_a_memo_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *kitchen_a_memo_instr_text* updates
    if (t >= 0.0 && kitchen_a_memo_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_a_memo_instr_text.tStart = t;  // (not accounting for frame time here)
      kitchen_a_memo_instr_text.frameNStart = frameN;  // exact frame index
      
      kitchen_a_memo_instr_text.setAutoDraw(true);
    }
    
    
    // *kitchen_a_memo_instr_resp* updates
    if (t >= 0.0 && kitchen_a_memo_instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_a_memo_instr_resp.tStart = t;  // (not accounting for frame time here)
      kitchen_a_memo_instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { kitchen_a_memo_instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { kitchen_a_memo_instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { kitchen_a_memo_instr_resp.clearEvents(); });
    }
    
    if (kitchen_a_memo_instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = kitchen_a_memo_instr_resp.getKeys({keyList: ['space'], waitRelease: false});
      _kitchen_a_memo_instr_resp_allKeys = _kitchen_a_memo_instr_resp_allKeys.concat(theseKeys);
      if (_kitchen_a_memo_instr_resp_allKeys.length > 0) {
        kitchen_a_memo_instr_resp.keys = _kitchen_a_memo_instr_resp_allKeys[_kitchen_a_memo_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        kitchen_a_memo_instr_resp.rt = _kitchen_a_memo_instr_resp_allKeys[_kitchen_a_memo_instr_resp_allKeys.length - 1].rt;
        kitchen_a_memo_instr_resp.duration = _kitchen_a_memo_instr_resp_allKeys[_kitchen_a_memo_instr_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of kitchen_a_memo_instrComponents)
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


function kitchen_a_memo_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'kitchen_a_memo_instr' ---
    for (const thisComponent of kitchen_a_memo_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    kitchen_a_memo_instr_resp.stop();
    // the Routine "kitchen_a_memo_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _memotest_task_slider_key_resp_allKeys;
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
    memotest_task_slider_key_resp.keys = undefined;
    memotest_task_slider_key_resp.rt = undefined;
    _memotest_task_slider_key_resp_allKeys = [];
    // keep track of which components have finished
    memotest_taskComponents = [];
    memotest_taskComponents.push(memotest_task_stim);
    memotest_taskComponents.push(memotest_task_slider);
    memotest_taskComponents.push(memotest_task_slider_key_resp);
    
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
    
    
    // *memotest_task_slider_key_resp* updates
    if (t >= 0.0 && memotest_task_slider_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memotest_task_slider_key_resp.tStart = t;  // (not accounting for frame time here)
      memotest_task_slider_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { memotest_task_slider_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { memotest_task_slider_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { memotest_task_slider_key_resp.clearEvents(); });
    }
    
    if (memotest_task_slider_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = memotest_task_slider_key_resp.getKeys({keyList: ['d', 'f', 'j', 'k'], waitRelease: false});
      _memotest_task_slider_key_resp_allKeys = _memotest_task_slider_key_resp_allKeys.concat(theseKeys);
      if (_memotest_task_slider_key_resp_allKeys.length > 0) {
        memotest_task_slider_key_resp.keys = _memotest_task_slider_key_resp_allKeys[0].name;  // just the first key pressed
        memotest_task_slider_key_resp.rt = _memotest_task_slider_key_resp_allKeys[0].rt;
        memotest_task_slider_key_resp.duration = _memotest_task_slider_key_resp_allKeys[0].duration;
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
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(memotest_task_slider_key_resp.corr, level);
    }
    psychoJS.experiment.addData('memotest_task_slider_key_resp.keys', memotest_task_slider_key_resp.keys);
    if (typeof memotest_task_slider_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('memotest_task_slider_key_resp.rt', memotest_task_slider_key_resp.rt);
        psychoJS.experiment.addData('memotest_task_slider_key_resp.duration', memotest_task_slider_key_resp.duration);
        routineTimer.reset();
        }
    
    memotest_task_slider_key_resp.stop();
    // the Routine "memotest_task" was not non-slip safe, so reset the non-slip timer
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
    kitchen_b_block_no.setText(block_total);
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


var _kitchen_b_memo_instr_resp_allKeys;
var kitchen_b_memo_instrComponents;
function kitchen_b_memo_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'kitchen_b_memo_instr' ---
    t = 0;
    kitchen_b_memo_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((kitchen_b_memotest.thisN > 0));
    kitchen_b_memo_instr_resp.keys = undefined;
    kitchen_b_memo_instr_resp.rt = undefined;
    _kitchen_b_memo_instr_resp_allKeys = [];
    // keep track of which components have finished
    kitchen_b_memo_instrComponents = [];
    kitchen_b_memo_instrComponents.push(kitchen_b_memo_instr_text);
    kitchen_b_memo_instrComponents.push(kitchen_b_memo_instr_resp);
    
    for (const thisComponent of kitchen_b_memo_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function kitchen_b_memo_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'kitchen_b_memo_instr' ---
    // get current time
    t = kitchen_b_memo_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *kitchen_b_memo_instr_text* updates
    if (t >= 0.0 && kitchen_b_memo_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_b_memo_instr_text.tStart = t;  // (not accounting for frame time here)
      kitchen_b_memo_instr_text.frameNStart = frameN;  // exact frame index
      
      kitchen_b_memo_instr_text.setAutoDraw(true);
    }
    
    
    // *kitchen_b_memo_instr_resp* updates
    if (t >= 0.0 && kitchen_b_memo_instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      kitchen_b_memo_instr_resp.tStart = t;  // (not accounting for frame time here)
      kitchen_b_memo_instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { kitchen_b_memo_instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { kitchen_b_memo_instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { kitchen_b_memo_instr_resp.clearEvents(); });
    }
    
    if (kitchen_b_memo_instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = kitchen_b_memo_instr_resp.getKeys({keyList: ['space'], waitRelease: false});
      _kitchen_b_memo_instr_resp_allKeys = _kitchen_b_memo_instr_resp_allKeys.concat(theseKeys);
      if (_kitchen_b_memo_instr_resp_allKeys.length > 0) {
        kitchen_b_memo_instr_resp.keys = _kitchen_b_memo_instr_resp_allKeys[_kitchen_b_memo_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        kitchen_b_memo_instr_resp.rt = _kitchen_b_memo_instr_resp_allKeys[_kitchen_b_memo_instr_resp_allKeys.length - 1].rt;
        kitchen_b_memo_instr_resp.duration = _kitchen_b_memo_instr_resp_allKeys[_kitchen_b_memo_instr_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of kitchen_b_memo_instrComponents)
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


function kitchen_b_memo_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'kitchen_b_memo_instr' ---
    for (const thisComponent of kitchen_b_memo_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    kitchen_b_memo_instr_resp.stop();
    // the Routine "kitchen_b_memo_instr" was not non-slip safe, so reset the non-slip timer
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
    living_a_block_no.setText(block_total);
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
    time = 0.9 + Math.random();
    // keep track of which components have finished
    living_random_isiComponents = [];
    living_random_isiComponents.push(living_random_isi_fix);
    living_random_isiComponents.push(living_random_isi_no);
    living_random_isiComponents.push(living_random_isi_yes);
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
    living_pictureComponents.push(living_picture_no);
    living_pictureComponents.push(living_picture_yes);
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
    
    
    // *living_picture_no* updates
    if (t >= 0.0 && living_picture_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_picture_no.tStart = t;  // (not accounting for frame time here)
      living_picture_no.frameNStart = frameN;  // exact frame index
      
      living_picture_no.setAutoDraw(true);
    }
    
    
    // *living_picture_yes* updates
    if (t >= 0.0 && living_picture_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_picture_yes.tStart = t;  // (not accounting for frame time here)
      living_picture_yes.frameNStart = frameN;  // exact frame index
      
      living_picture_yes.setAutoDraw(true);
    }
    
    
    // *living_picture_resp* updates
    if (t >= 0 && living_picture_resp.status === PsychoJS.Status.NOT_STARTED) {
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


var _living_a_memo_instr_resp_allKeys;
var living_a_memotest_instrComponents;
function living_a_memotest_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'living_a_memotest_instr' ---
    t = 0;
    living_a_memotest_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((living_a_memotest.thisN > 0));
    living_a_memo_instr_resp.keys = undefined;
    living_a_memo_instr_resp.rt = undefined;
    _living_a_memo_instr_resp_allKeys = [];
    // keep track of which components have finished
    living_a_memotest_instrComponents = [];
    living_a_memotest_instrComponents.push(living_a_memo_instr_text);
    living_a_memotest_instrComponents.push(living_a_memo_instr_resp);
    
    for (const thisComponent of living_a_memotest_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function living_a_memotest_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'living_a_memotest_instr' ---
    // get current time
    t = living_a_memotest_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *living_a_memo_instr_text* updates
    if (t >= 0.0 && living_a_memo_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_a_memo_instr_text.tStart = t;  // (not accounting for frame time here)
      living_a_memo_instr_text.frameNStart = frameN;  // exact frame index
      
      living_a_memo_instr_text.setAutoDraw(true);
    }
    
    
    // *living_a_memo_instr_resp* updates
    if (t >= 0.0 && living_a_memo_instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_a_memo_instr_resp.tStart = t;  // (not accounting for frame time here)
      living_a_memo_instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { living_a_memo_instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { living_a_memo_instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { living_a_memo_instr_resp.clearEvents(); });
    }
    
    if (living_a_memo_instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = living_a_memo_instr_resp.getKeys({keyList: ['space'], waitRelease: false});
      _living_a_memo_instr_resp_allKeys = _living_a_memo_instr_resp_allKeys.concat(theseKeys);
      if (_living_a_memo_instr_resp_allKeys.length > 0) {
        living_a_memo_instr_resp.keys = _living_a_memo_instr_resp_allKeys[_living_a_memo_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        living_a_memo_instr_resp.rt = _living_a_memo_instr_resp_allKeys[_living_a_memo_instr_resp_allKeys.length - 1].rt;
        living_a_memo_instr_resp.duration = _living_a_memo_instr_resp_allKeys[_living_a_memo_instr_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of living_a_memotest_instrComponents)
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


function living_a_memotest_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'living_a_memotest_instr' ---
    for (const thisComponent of living_a_memotest_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    living_a_memo_instr_resp.stop();
    // the Routine "living_a_memotest_instr" was not non-slip safe, so reset the non-slip timer
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
    living_b_block_no.setText(block_total);
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


var _living_b_memo_instr_resp_allKeys;
var living_b_memotest_instrComponents;
function living_b_memotest_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'living_b_memotest_instr' ---
    t = 0;
    living_b_memotest_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((living_b_memotest.thisN > 0));
    living_b_memo_instr_resp.keys = undefined;
    living_b_memo_instr_resp.rt = undefined;
    _living_b_memo_instr_resp_allKeys = [];
    // keep track of which components have finished
    living_b_memotest_instrComponents = [];
    living_b_memotest_instrComponents.push(living_b_memo_instr_text);
    living_b_memotest_instrComponents.push(living_b_memo_instr_resp);
    
    for (const thisComponent of living_b_memotest_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function living_b_memotest_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'living_b_memotest_instr' ---
    // get current time
    t = living_b_memotest_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *living_b_memo_instr_text* updates
    if (t >= 0.0 && living_b_memo_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_b_memo_instr_text.tStart = t;  // (not accounting for frame time here)
      living_b_memo_instr_text.frameNStart = frameN;  // exact frame index
      
      living_b_memo_instr_text.setAutoDraw(true);
    }
    
    
    // *living_b_memo_instr_resp* updates
    if (t >= 0.0 && living_b_memo_instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_b_memo_instr_resp.tStart = t;  // (not accounting for frame time here)
      living_b_memo_instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { living_b_memo_instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { living_b_memo_instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { living_b_memo_instr_resp.clearEvents(); });
    }
    
    if (living_b_memo_instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = living_b_memo_instr_resp.getKeys({keyList: ['space'], waitRelease: false});
      _living_b_memo_instr_resp_allKeys = _living_b_memo_instr_resp_allKeys.concat(theseKeys);
      if (_living_b_memo_instr_resp_allKeys.length > 0) {
        living_b_memo_instr_resp.keys = _living_b_memo_instr_resp_allKeys[_living_b_memo_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        living_b_memo_instr_resp.rt = _living_b_memo_instr_resp_allKeys[_living_b_memo_instr_resp_allKeys.length - 1].rt;
        living_b_memo_instr_resp.duration = _living_b_memo_instr_resp_allKeys[_living_b_memo_instr_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of living_b_memotest_instrComponents)
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


function living_b_memotest_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'living_b_memotest_instr' ---
    for (const thisComponent of living_b_memotest_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    living_b_memo_instr_resp.stop();
    // the Routine "living_b_memotest_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _bed_a_resp_allKeys;
var bed_aComponents;
function bed_aRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bed_a' ---
    t = 0;
    bed_aClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((bed_a_categorization_trials.thisN > 0));
    bed_a_resp.keys = undefined;
    bed_a_resp.rt = undefined;
    _bed_a_resp_allKeys = [];
    bed_a_block_no.setText(block_total);
    // keep track of which components have finished
    bed_aComponents = [];
    bed_aComponents.push(bed_a_text);
    bed_aComponents.push(bed_a_text_2);
    bed_aComponents.push(bed_a_resp);
    bed_aComponents.push(bed_a_block_no);
    
    for (const thisComponent of bed_aComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function bed_aRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bed_a' ---
    // get current time
    t = bed_aClock.getTime();
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
    for (const thisComponent of bed_aComponents)
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


function bed_aRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bed_a' ---
    for (const thisComponent of bed_aComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    bed_a_resp.stop();
    // the Routine "bed_a" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var bed_random_isiComponents;
function bed_random_isiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bed_random_isi' ---
    t = 0;
    bed_random_isiClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from bed_random_isi_code
    time = 0.9 + Math.random();
    // keep track of which components have finished
    bed_random_isiComponents = [];
    bed_random_isiComponents.push(bed_random_isi_fix);
    bed_random_isiComponents.push(bed_random_isi_no);
    bed_random_isiComponents.push(bed_random_isi_yes);
    bed_random_isiComponents.push(bed_random_isi_question);
    
    for (const thisComponent of bed_random_isiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function bed_random_isiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bed_random_isi' ---
    // get current time
    t = bed_random_isiClock.getTime();
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
    for (const thisComponent of bed_random_isiComponents)
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


function bed_random_isiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bed_random_isi' ---
    for (const thisComponent of bed_random_isiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "bed_random_isi" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _bed_picture_resp_allKeys;
var bed_pictureComponents;
function bed_pictureRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bed_picture' ---
    t = 0;
    bed_pictureClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    bed_picture_image.setImage(stimulus);
    bed_picture_resp.keys = undefined;
    bed_picture_resp.rt = undefined;
    _bed_picture_resp_allKeys = [];
    // keep track of which components have finished
    bed_pictureComponents = [];
    bed_pictureComponents.push(bed_picture_fix);
    bed_pictureComponents.push(bed_picture_image);
    bed_pictureComponents.push(bed_picture_no);
    bed_pictureComponents.push(bed_picture_yes);
    bed_pictureComponents.push(bed_picture_resp);
    bed_pictureComponents.push(bed_picture_question);
    
    for (const thisComponent of bed_pictureComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function bed_pictureRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bed_picture' ---
    // get current time
    t = bed_pictureClock.getTime();
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
    
    
    // *bed_picture_no* updates
    if (t >= 0.0 && bed_picture_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_picture_no.tStart = t;  // (not accounting for frame time here)
      bed_picture_no.frameNStart = frameN;  // exact frame index
      
      bed_picture_no.setAutoDraw(true);
    }
    
    
    // *bed_picture_yes* updates
    if (t >= 0.0 && bed_picture_yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_picture_yes.tStart = t;  // (not accounting for frame time here)
      bed_picture_yes.frameNStart = frameN;  // exact frame index
      
      bed_picture_yes.setAutoDraw(true);
    }
    
    
    // *bed_picture_resp* updates
    if (t >= 0 && bed_picture_resp.status === PsychoJS.Status.NOT_STARTED) {
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
    for (const thisComponent of bed_pictureComponents)
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


function bed_pictureRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bed_picture' ---
    for (const thisComponent of bed_pictureComponents) {
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
    // the Routine "bed_picture" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _bed_a_memo_instr_resp_allKeys;
var bed_a_memotest_instrComponents;
function bed_a_memotest_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bed_a_memotest_instr' ---
    t = 0;
    bed_a_memotest_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((bed_a_memotest.thisN > 0));
    bed_a_memo_instr_resp.keys = undefined;
    bed_a_memo_instr_resp.rt = undefined;
    _bed_a_memo_instr_resp_allKeys = [];
    // keep track of which components have finished
    bed_a_memotest_instrComponents = [];
    bed_a_memotest_instrComponents.push(bed_a_memo_instr_text);
    bed_a_memotest_instrComponents.push(bed_a_memo_instr_resp);
    
    for (const thisComponent of bed_a_memotest_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function bed_a_memotest_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bed_a_memotest_instr' ---
    // get current time
    t = bed_a_memotest_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bed_a_memo_instr_text* updates
    if (t >= 0.0 && bed_a_memo_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_a_memo_instr_text.tStart = t;  // (not accounting for frame time here)
      bed_a_memo_instr_text.frameNStart = frameN;  // exact frame index
      
      bed_a_memo_instr_text.setAutoDraw(true);
    }
    
    
    // *bed_a_memo_instr_resp* updates
    if (t >= 0.0 && bed_a_memo_instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_a_memo_instr_resp.tStart = t;  // (not accounting for frame time here)
      bed_a_memo_instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { bed_a_memo_instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { bed_a_memo_instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { bed_a_memo_instr_resp.clearEvents(); });
    }
    
    if (bed_a_memo_instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = bed_a_memo_instr_resp.getKeys({keyList: ['space'], waitRelease: false});
      _bed_a_memo_instr_resp_allKeys = _bed_a_memo_instr_resp_allKeys.concat(theseKeys);
      if (_bed_a_memo_instr_resp_allKeys.length > 0) {
        bed_a_memo_instr_resp.keys = _bed_a_memo_instr_resp_allKeys[_bed_a_memo_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        bed_a_memo_instr_resp.rt = _bed_a_memo_instr_resp_allKeys[_bed_a_memo_instr_resp_allKeys.length - 1].rt;
        bed_a_memo_instr_resp.duration = _bed_a_memo_instr_resp_allKeys[_bed_a_memo_instr_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of bed_a_memotest_instrComponents)
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


function bed_a_memotest_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bed_a_memotest_instr' ---
    for (const thisComponent of bed_a_memotest_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    bed_a_memo_instr_resp.stop();
    // the Routine "bed_a_memotest_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _bed_b_resp_allKeys;
var bed_bComponents;
function bed_bRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bed_b' ---
    t = 0;
    bed_bClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((bed_b_categorization_trials.thisN > 0));
    bed_b_resp.keys = undefined;
    bed_b_resp.rt = undefined;
    _bed_b_resp_allKeys = [];
    bed_b_block_no.setText(block_total);
    // keep track of which components have finished
    bed_bComponents = [];
    bed_bComponents.push(bed_b_text);
    bed_bComponents.push(bed_b_text_2);
    bed_bComponents.push(bed_b_resp);
    bed_bComponents.push(bed_b_block_no);
    
    for (const thisComponent of bed_bComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function bed_bRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bed_b' ---
    // get current time
    t = bed_bClock.getTime();
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
    for (const thisComponent of bed_bComponents)
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


function bed_bRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bed_b' ---
    for (const thisComponent of bed_bComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    bed_b_resp.stop();
    // the Routine "bed_b" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _bed_b_memo_instr_resp_allKeys;
var bed_b_memotest_instrComponents;
function bed_b_memotest_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bed_b_memotest_instr' ---
    t = 0;
    bed_b_memotest_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((bed_b_memotest.thisN > 0));
    bed_b_memo_instr_resp.keys = undefined;
    bed_b_memo_instr_resp.rt = undefined;
    _bed_b_memo_instr_resp_allKeys = [];
    // keep track of which components have finished
    bed_b_memotest_instrComponents = [];
    bed_b_memotest_instrComponents.push(bed_b_memo_instr_text);
    bed_b_memotest_instrComponents.push(bed_b_memo_instr_resp);
    
    for (const thisComponent of bed_b_memotest_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function bed_b_memotest_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bed_b_memotest_instr' ---
    // get current time
    t = bed_b_memotest_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bed_b_memo_instr_text* updates
    if (t >= 0.0 && bed_b_memo_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_b_memo_instr_text.tStart = t;  // (not accounting for frame time here)
      bed_b_memo_instr_text.frameNStart = frameN;  // exact frame index
      
      bed_b_memo_instr_text.setAutoDraw(true);
    }
    
    
    // *bed_b_memo_instr_resp* updates
    if (t >= 0.0 && bed_b_memo_instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bed_b_memo_instr_resp.tStart = t;  // (not accounting for frame time here)
      bed_b_memo_instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { bed_b_memo_instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { bed_b_memo_instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { bed_b_memo_instr_resp.clearEvents(); });
    }
    
    if (bed_b_memo_instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = bed_b_memo_instr_resp.getKeys({keyList: ['space'], waitRelease: false});
      _bed_b_memo_instr_resp_allKeys = _bed_b_memo_instr_resp_allKeys.concat(theseKeys);
      if (_bed_b_memo_instr_resp_allKeys.length > 0) {
        bed_b_memo_instr_resp.keys = _bed_b_memo_instr_resp_allKeys[_bed_b_memo_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        bed_b_memo_instr_resp.rt = _bed_b_memo_instr_resp_allKeys[_bed_b_memo_instr_resp_allKeys.length - 1].rt;
        bed_b_memo_instr_resp.duration = _bed_b_memo_instr_resp_allKeys[_bed_b_memo_instr_resp_allKeys.length - 1].duration;
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
    for (const thisComponent of bed_b_memotest_instrComponents)
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


function bed_b_memotest_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bed_b_memotest_instr' ---
    for (const thisComponent of bed_b_memotest_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    bed_b_memo_instr_resp.stop();
    // the Routine "bed_b_memotest_instr" was not non-slip safe, so reset the non-slip timer
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
    end_resp.keys = undefined;
    end_resp.rt = undefined;
    _end_resp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(end_resp);
    
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
