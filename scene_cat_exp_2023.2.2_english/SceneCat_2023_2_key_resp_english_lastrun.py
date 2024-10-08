﻿#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.1.1),
    on Wed Aug  7 16:21:38 2024
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.1.1'
expName = 'SceneCat_2023_2_key_resp'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': '',
    'age': '',
    'gender': '',
    'handedness': '',
    'email for compensation': '',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_loggingLevel = logging.getLevel('exp')
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
    # override logging level
    _loggingLevel = logging.getLevel(
        prefs.piloting['pilotLoggingLevel']
    )

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/mathilde/Buschlab/scenecat_online_english/SceneCat_2023_2_key_resp_english_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # this outputs to the screen, not a file
    logging.console.setLevel(_loggingLevel)
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log', level=_loggingLevel)
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=[1440, 900], fullscr=_fullScr, screen=0,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height', 
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.mouseVisible = False
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    ioSession = '1'
    if 'session' in expInfo:
        ioSession = str(expInfo['session'])
    ioServer = io.launchHubServer(window=win, **ioConfig)
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    if deviceManager.getDevice('intro_resp') is None:
        # initialise intro_resp
        intro_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='intro_resp',
        )
    if deviceManager.getDevice('consent_resp') is None:
        # initialise consent_resp
        consent_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='consent_resp',
        )
    if deviceManager.getDevice('data_safety_resp') is None:
        # initialise data_safety_resp
        data_safety_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='data_safety_resp',
        )
    if deviceManager.getDevice('data_safety_2_resp') is None:
        # initialise data_safety_2_resp
        data_safety_2_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='data_safety_2_resp',
        )
    if deviceManager.getDevice('instructions_cat_resp') is None:
        # initialise instructions_cat_resp
        instructions_cat_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='instructions_cat_resp',
        )
    if deviceManager.getDevice('instructions_cat_2_resp') is None:
        # initialise instructions_cat_2_resp
        instructions_cat_2_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='instructions_cat_2_resp',
        )
    if deviceManager.getDevice('cat_training_key') is None:
        # initialise cat_training_key
        cat_training_key = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='cat_training_key',
        )
    if deviceManager.getDevice('instructions_memo_resp') is None:
        # initialise instructions_memo_resp
        instructions_memo_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='instructions_memo_resp',
        )
    if deviceManager.getDevice('memo_training_slider_key_resp') is None:
        # initialise memo_training_slider_key_resp
        memo_training_slider_key_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='memo_training_slider_key_resp',
        )
    if deviceManager.getDevice('start_cat_resp') is None:
        # initialise start_cat_resp
        start_cat_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='start_cat_resp',
        )
    if deviceManager.getDevice('kitchen_a_resp') is None:
        # initialise kitchen_a_resp
        kitchen_a_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='kitchen_a_resp',
        )
    if deviceManager.getDevice('kitchen_picture_resp') is None:
        # initialise kitchen_picture_resp
        kitchen_picture_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='kitchen_picture_resp',
        )
    if deviceManager.getDevice('kitchen_a_memo_instr_resp') is None:
        # initialise kitchen_a_memo_instr_resp
        kitchen_a_memo_instr_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='kitchen_a_memo_instr_resp',
        )
    if deviceManager.getDevice('memotest_task_slider_key_resp') is None:
        # initialise memotest_task_slider_key_resp
        memotest_task_slider_key_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='memotest_task_slider_key_resp',
        )
    if deviceManager.getDevice('kitchen_b_resp') is None:
        # initialise kitchen_b_resp
        kitchen_b_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='kitchen_b_resp',
        )
    if deviceManager.getDevice('kitchen_b_memo_instr_resp') is None:
        # initialise kitchen_b_memo_instr_resp
        kitchen_b_memo_instr_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='kitchen_b_memo_instr_resp',
        )
    if deviceManager.getDevice('living_a_resp') is None:
        # initialise living_a_resp
        living_a_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='living_a_resp',
        )
    if deviceManager.getDevice('living_picture_resp') is None:
        # initialise living_picture_resp
        living_picture_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='living_picture_resp',
        )
    if deviceManager.getDevice('living_a_memo_instr_resp') is None:
        # initialise living_a_memo_instr_resp
        living_a_memo_instr_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='living_a_memo_instr_resp',
        )
    if deviceManager.getDevice('living_b_resp') is None:
        # initialise living_b_resp
        living_b_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='living_b_resp',
        )
    if deviceManager.getDevice('living_b_memo_instr_resp') is None:
        # initialise living_b_memo_instr_resp
        living_b_memo_instr_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='living_b_memo_instr_resp',
        )
    if deviceManager.getDevice('bed_a_resp') is None:
        # initialise bed_a_resp
        bed_a_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='bed_a_resp',
        )
    if deviceManager.getDevice('bed_picture_resp') is None:
        # initialise bed_picture_resp
        bed_picture_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='bed_picture_resp',
        )
    if deviceManager.getDevice('bed_a_memo_instr_resp') is None:
        # initialise bed_a_memo_instr_resp
        bed_a_memo_instr_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='bed_a_memo_instr_resp',
        )
    if deviceManager.getDevice('bed_b_resp') is None:
        # initialise bed_b_resp
        bed_b_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='bed_b_resp',
        )
    if deviceManager.getDevice('bed_b_memo_instr_resp') is None:
        # initialise bed_b_memo_instr_resp
        bed_b_memo_instr_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='bed_b_memo_instr_resp',
        )
    if deviceManager.getDevice('break_resp') is None:
        # initialise break_resp
        break_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='break_resp',
        )
    if deviceManager.getDevice('end_resp') is None:
        # initialise end_resp
        end_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='end_resp',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # prevent components from auto-drawing
    win.stashAutoDraw()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # flip the screen
        win.flip()
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # restore auto-drawn components
    win.retrieveAutoDraw()
    # reset any timers
    for timer in timers:
        timer.reset()


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "intro" ---
    intro_text = visual.TextStim(win=win, name='intro_text',
        text='-- SceneCat 3 --\n\nWelcome to the experiment\n\nIn this experiment we investigate how photographs of different room categories are perceived and remembered. It will take about 30 minutes.\nPlease take an upright position for the duration of the experiment.\n\nFirst, a declaration of consent and the privacy policy will follow.\n\nPlease note, that you should not leave the fullscreen mode at any time, since the experiment will then terminate automatically.\n\nContinue with SPACE.\n',
        font='Open Sans',
        pos=(0, 0), height=0.045, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    intro_resp = keyboard.Keyboard(deviceName='intro_resp')
    # Run 'Begin Experiment' code from conditions_files_code
    # Conditions Files zuweisen 
    participant = expInfo['participant']
    
    conditions_cat_kitchen_a = "input_files/" + participant + "_scenecat_categorization_kitchens_1.xlsx"
    conditions_cat_kitchen_b =  "input_files/" + participant + "_scenecat_categorization_kitchens_2.xlsx"
    conditions_cat_living_a =  "input_files/" + participant + "_scenecat_categorization_living_rooms_1.xlsx"
    conditions_cat_living_b =  "input_files/" + participant + "_scenecat_categorization_living_rooms_2.xlsx"
    conditions_cat_sleep_a =  "input_files/" + participant + "_scenecat_categorization_bedrooms_1.xlsx"
    conditions_cat_sleep_b =  "input_files/" + participant + "_scenecat_categorization_bedrooms_2.xlsx"
    conditions_memo_kitchen_a =  "input_files/" + participant + "_scenecat_memory_kitchens_1.xlsx"
    conditions_memo_kitchen_b =  "input_files/" + participant + "_scenecat_memory_kitchens_2.xlsx"
    conditions_memo_living_a = "input_files/" +  participant + "_scenecat_memory_living_rooms_1.xlsx"
    conditions_memo_living_b = "input_files/" +  participant + "_scenecat_memory_living_rooms_2.xlsx"
    conditions_memo_sleep_a =  "input_files/" + participant + "_scenecat_memory_bedrooms_1.xlsx"
    conditions_memo_sleep_b = "input_files/" +  participant + "_scenecat_memory_bedrooms_2.xlsx"
    conditions_block_order = "input_files/" +  participant + "_scenecat_block_order.xlsx"
    
    
    # --- Initialize components for Routine "consent" ---
    consent_text = visual.TextStim(win=win, name='consent_text',
        text='Declaration of consent\n\nThank you for participating in our study on image comprehension!\n\nYour participation in this study is voluntary. You are free to discontinue your participation at any time during this study without incurring any disadvantages. \n\nData protection: Your details are of course confidential and will only be stored and evaluated in a completely anonymous form, i.e. without reference to your name or other personal data. Further information can be found in the privacy policy.\n\nQuestions: If you have any questions about this study, you can contact the study director or Prof. Niko Busch (niko.busch@uni-muenster) at any time.\n\nI confirm that I am at least 18 years old, have read and understood this consent form and wish to participate in the study. I have taken note of the privacy policy and voluntarily consent to the collection and further processing of my personal data as described therein. I have been informed of my right to withdraw my consent at any time without giving reasons.\n\nPress SPACE to confirm your participation.\nPress ESC to stop the experiment.',
        font='Open Sans',
        pos=(0, 0), height=0.028, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    consent_resp = keyboard.Keyboard(deviceName='consent_resp')
    
    # --- Initialize components for Routine "data_safety" ---
    data_safety_text_2 = visual.TextStim(win=win, name='data_safety_text_2',
        text='Privacy policy\n\n1. Scope of data collection and processing: In the course of the study, your demographic data (age, gender, handedness) as well as reaction times and correctness of your answers will be collected during the experiment. The data and personal communications collected as part of this study will be treated confidentially. Those employees who have personal data through direct contact with you are subject to a duty of confidentiality.  The data will be collected completely anonymously, i.e. your name will not be asked at any point. The anonymized data is stored for at least 10 years. At the end of the session, your data will be stored without your name, i.e. in anonymized form. From this point on, your data can no longer be associated with your person, i.e. it is no longer possible to identify your data. We can therefore only comply with your request to delete your data until it has been stored in anonymized form. The results and data of this study will be published as a scientific publication. This is done in anonymized form, i.e. without the data being assigned to a specific person. The completely anonymized data of this study will be made available as open data in a secure, internet-based data archive (e.g. OSF, ZPID, GESIS etc.). This study thus follows the recommendations of the German Research Foundation (DFG) and the German Psychological Society (DGPs) for quality assurance in research.\n\n2. legal basis: The legal basis for the processing of the personal data mentioned is consent in accordance with Art. 6 (1) letter a EU GDPR.\n\nPress SPACE to continue.',
        font='Open Sans',
        pos=(0, 0), height=0.028, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    data_safety_resp = keyboard.Keyboard(deviceName='data_safety_resp')
    
    # --- Initialize components for Routine "data_safety_2" ---
    data_safety_2_text_2 = visual.TextStim(win=win, name='data_safety_2_text_2',
        text='3. revocation: You have the right to revoke your consent under data protection law at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. (Revocation with effect for the future). Address the revocation to the controller. You will not suffer any disadvantages as a result of the revocation.\n4. name and address of the controller: The controller within the meaning of the EU General Data Protection Regulation (GDPR) and other national data protection laws of the member states as well as other data protection regulations is the University of Münster, represented by the Rector, Prof. Dr. Johannes Wessels, Schlossplatz 2, 48149 Münster, phone: + 49 251 83-0, email: verwaltung@uni-muenster.de. If you have any questions about the content of the project, please contact the specialist contact person directly: Prof. Niko Busch, Tel.: + 49 (0) 251 83 34159, e-mail: niko.busch@uni-muenster.de\n5. contact details of the data protection officer: The data protection officer of the University of Münster is: Nina Meyer-Pachur, Schlossplatz 2, 48149 Münster, phone: + 49 251 83-22446, e-mail: datenschutz@uni-muenster.de\n6. reference to the rights of data subjects: According to the General Data Protection Regulation, you generally have the right to Information (Art 15 GDPR) , objection (Art 21 GDPR), data portability (Art 20 GDPR), erasure (Art 17 GDPR), restriction of processing (Art 18 GDPR), rectification (Art 16 GDPR). If you would like to exercise one of these rights, please contact one of the contact persons listed. You also have the right to lodge a complaint with the supervisory authority: State Commissioner for Data Protection and Freedom of Information North Rhine-Westphalia, Helga Block, Kavalleriestraße 2-4, 40213 Düsseldorf, phone: 02 11/384 24-0, email: poststelle@ldi.nrw.de, website: http://www.ldi.nrw.de\n\nPress SPACE to continue.',
        font='Open Sans',
        pos=(0, 0), height=0.028, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    data_safety_2_resp = keyboard.Keyboard(deviceName='data_safety_2_resp')
    
    # --- Initialize components for Routine "instructions_cat" ---
    instructions_cat_text_2 = visual.TextStim(win=win, name='instructions_cat_text_2',
        text='Experiment Instructions:\n\nThe experiment consists of a practice block and six subsequent blocks, each with two parts.\n\n1. Categorization Task:\n   - At the beginning of each block, you will be given a specific room category (e.g., living room). Your task is to categorize the pictures shown:\n- Press the “f” key as QUICKLY as possible if the picture does NOT belong to the specified category.\n- Press the “j” key as QUICKLY as possible if the picture belongs to the specified category.\n- Speed is very important in this task, so please respond as fast as you can.\n\n2. Memory Test:\n   - In the second part of the block, you will be shown pictures again. Indicate whether each picture was shown in categorization task of the present block and rate your confidence:\n- “Certainly old” (picture was shown before and you are certain)\n- “Rather old” (picture was shown before and you are somewhat certain)\n- “Rather new” (picture was not shown before and you are somewhat certain)\n- “Certainly new” (picture was not shown before and you are certain)\n- Please respond as accurately as possible in this task; speed is not important here.\n\nAdditional Information:\n- A fixation cross will appear in the center of the screen between images in both parts. Please keep your eyes on this position throughout the entire block.\n- There will be a practice block at the beginning, including both parts of the task. After each answer, you will see whether it was correct or incorrect. This will help you understand the task better.\n\nPreparation:\n- Place your fingers on the “f” and “j” keys now.\n\nPress SPACE to continue with the practice block.',
        font='Open Sans',
        pos=(0, 0), height=0.026, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    instructions_cat_resp = keyboard.Keyboard(deviceName='instructions_cat_resp')
    
    # --- Initialize components for Routine "instructions_cat_2" ---
    instructions_cat_2_text = visual.TextStim(win=win, name='instructions_cat_2_text',
        text='Now the exercise part for the categorization task begins.\n\nWe will show you a text label indicating a category. Next, we will show you a sequence of images. Use the “f”and “j” keys to indicate as quickly as possible for each picture whether the picture belongs to the specified category.\nf = is NOT from that category\nj = YES, is from that category\n\nStart with SPACE. ',
        font='Open Sans',
        pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    instructions_cat_2_resp = keyboard.Keyboard(deviceName='instructions_cat_2_resp')
    
    # --- Initialize components for Routine "category_test_text" ---
    category_test_word = visual.TextStim(win=win, name='category_test_word',
        text='train station',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "fix_categorization_training" ---
    fix_cat_training_question = visual.TextStim(win=win, name='fix_cat_training_question',
        text='Is this a train station?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    fix_cat_training_no = visual.TextStim(win=win, name='fix_cat_training_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    fix_cat_training_yes = visual.TextStim(win=win, name='fix_cat_training_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    fix_cat_training_pic = visual.ImageStim(
        win=win,
        name='fix_cat_training_pic', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    
    # --- Initialize components for Routine "categorization_training" ---
    cat_training_fix = visual.ImageStim(
        win=win,
        name='cat_training_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    cat_training_stim = visual.ImageStim(
        win=win,
        name='cat_training_stim', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    cat_training_key = keyboard.Keyboard(deviceName='cat_training_key')
    cat_training_question = visual.TextStim(win=win, name='cat_training_question',
        text='Is this a train station?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    cat_training_no = visual.TextStim(win=win, name='cat_training_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    cat_training_yes = visual.TextStim(win=win, name='cat_training_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    
    # --- Initialize components for Routine "cat_training_feedback" ---
    cat_train_feedback_text = visual.TextStim(win=win, name='cat_train_feedback_text',
        text='',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    cat_train_feedb_no = visual.TextStim(win=win, name='cat_train_feedb_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    cat_train_feedb_yes = visual.TextStim(win=win, name='cat_train_feedb_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    cat_train_feedb_question = visual.TextStim(win=win, name='cat_train_feedb_question',
        text='Is this a train station?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "instruction_memo" ---
    instructions_memo_text = visual.TextStim(win=win, name='instructions_memo_text',
        text='Now the exercise part of the memory test begins. \n\nYou will be shown a series of pictures. For each picture, please indicate whether you have seen it before during the previous categorization task. \n\n"Old" means the picture was shown earlier. "New" means the picture was not shown earlier. \n\nAdditionally, please rate your confidence in your answer.\n\nPress SPACE to start a test run.',
        font='Open Sans',
        pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    instructions_memo_resp = keyboard.Keyboard(deviceName='instructions_memo_resp')
    
    # --- Initialize components for Routine "memo_fix_isi" ---
    memo_fix_pic = visual.ImageStim(
        win=win,
        name='memo_fix_pic', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "memo_training" ---
    memo_training_fix = visual.ImageStim(
        win=win,
        name='memo_training_fix', 
        image=None, mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    memo_training_stim = visual.ImageStim(
        win=win,
        name='memo_training_stim', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    memo_training_slider = visual.Slider(win=win, name='memo_training_slider',
        startValue=None, size=(0.8, 0.05), pos=(0, -0.325), units=win.units,
        labels=['d \n certainly old', 'f \n rather old', 'j \n rather new', 'k \n certainly new'],ticks=None, granularity=1,
        style='radio', styleTweaks=(), opacity=None,
        labelColor='LightGray', markerColor=[1.0000, 1.0000, 1.0000], lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.03,
        flip=False, ori=0.0, depth=-2, readOnly=False)
    memo_training_slider_key_resp = keyboard.Keyboard(deviceName='memo_training_slider_key_resp')
    
    # --- Initialize components for Routine "memo_training_feedback" ---
    memo_train_feedb_text = visual.TextStim(win=win, name='memo_train_feedb_text',
        text='',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "start_categorization" ---
    start_cat_text = visual.TextStim(win=win, name='start_cat_text',
        text='The test block is finished.\n\nDuring the following task, you will no longer be shown any feedback as to whether you have answered correctly or incorrectly.\n\nPress the SPACE to start the experiment.',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    start_cat_resp = keyboard.Keyboard(deviceName='start_cat_resp')
    
    # --- Initialize components for Routine "kitchen_a" ---
    kitchen_a_text = visual.TextStim(win=win, name='kitchen_a_text',
        text='kitchen',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    kitchen_a_text_2 = visual.TextStim(win=win, name='kitchen_a_text_2',
        text='Press SPACE to start block\n\n\n\nfrom 6.',
        font='Open Sans',
        pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    kitchen_a_resp = keyboard.Keyboard(deviceName='kitchen_a_resp')
    kitchen_a_block_no = visual.TextStim(win=win, name='kitchen_a_block_no',
        text='',
        font='Open Sans',
        pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    
    # --- Initialize components for Routine "kitchen_random_isi" ---
    random_isi_kitchen_fix = visual.ImageStim(
        win=win,
        name='random_isi_kitchen_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    random_isi_kitchen_no = visual.TextStim(win=win, name='random_isi_kitchen_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    random_isi_kitchen_yes = visual.TextStim(win=win, name='random_isi_kitchen_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    random_isi_kitchen_question = visual.TextStim(win=win, name='random_isi_kitchen_question',
        text='Is this a kitchen?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "kitchen_picture" ---
    kitchen_fix = visual.ImageStim(
        win=win,
        name='kitchen_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    kitchen_image = visual.ImageStim(
        win=win,
        name='kitchen_image', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    kitchen_picture_no = visual.TextStim(win=win, name='kitchen_picture_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    kitchen_picture_yes = visual.TextStim(win=win, name='kitchen_picture_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    kitchen_picture_question = visual.TextStim(win=win, name='kitchen_picture_question',
        text='Is this a kitchen?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    kitchen_picture_resp = keyboard.Keyboard(deviceName='kitchen_picture_resp')
    
    # --- Initialize components for Routine "kitchen_a_memo_instr" ---
    kitchen_a_memo_instr_text = visual.TextStim(win=win, name='kitchen_a_memo_instr_text',
        text='Now the memory test starts for the kitchen category.\n\nPress SPACE to start.',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    kitchen_a_memo_instr_resp = keyboard.Keyboard(deviceName='kitchen_a_memo_instr_resp')
    
    # --- Initialize components for Routine "memo_fix_isi" ---
    memo_fix_pic = visual.ImageStim(
        win=win,
        name='memo_fix_pic', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "memotest_task" ---
    memotest_task_stim = visual.ImageStim(
        win=win,
        name='memotest_task_stim', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    memotest_task_slider = visual.Slider(win=win, name='memotest_task_slider',
        startValue=None, size=(0.8, 0.05), pos=(0, -0.325), units=win.units,
        labels=['d \n certainly old', 'f \n rather old', 'j \n rather new', 'k \n certainly new'],ticks=None, granularity=1,
        style='radio', styleTweaks=(), opacity=None,
        labelColor='LightGray', markerColor=[1.0000, 1.0000, 1.0000], lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.03,
        flip=False, ori=0.0, depth=-1, readOnly=False)
    memotest_task_slider_key_resp = keyboard.Keyboard(deviceName='memotest_task_slider_key_resp')
    
    # --- Initialize components for Routine "kitchen_b" ---
    kitchen_b_text = visual.TextStim(win=win, name='kitchen_b_text',
        text='kitchen',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    kitchen_b_text_2 = visual.TextStim(win=win, name='kitchen_b_text_2',
        text='Press SPACE to start block\n\n\n\nfrom 6.',
        font='Open Sans',
        pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    kitchen_b_resp = keyboard.Keyboard(deviceName='kitchen_b_resp')
    kitchen_b_block_no = visual.TextStim(win=win, name='kitchen_b_block_no',
        text='',
        font='Open Sans',
        pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    
    # --- Initialize components for Routine "kitchen_random_isi" ---
    random_isi_kitchen_fix = visual.ImageStim(
        win=win,
        name='random_isi_kitchen_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    random_isi_kitchen_no = visual.TextStim(win=win, name='random_isi_kitchen_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    random_isi_kitchen_yes = visual.TextStim(win=win, name='random_isi_kitchen_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    random_isi_kitchen_question = visual.TextStim(win=win, name='random_isi_kitchen_question',
        text='Is this a kitchen?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "kitchen_picture" ---
    kitchen_fix = visual.ImageStim(
        win=win,
        name='kitchen_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    kitchen_image = visual.ImageStim(
        win=win,
        name='kitchen_image', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    kitchen_picture_no = visual.TextStim(win=win, name='kitchen_picture_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    kitchen_picture_yes = visual.TextStim(win=win, name='kitchen_picture_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    kitchen_picture_question = visual.TextStim(win=win, name='kitchen_picture_question',
        text='Is this a kitchen?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    kitchen_picture_resp = keyboard.Keyboard(deviceName='kitchen_picture_resp')
    
    # --- Initialize components for Routine "kitchen_b_memo_instr" ---
    kitchen_b_memo_instr_text = visual.TextStim(win=win, name='kitchen_b_memo_instr_text',
        text='Now the memory test starts for the kitchen category.\n\nPress SPACE to start.\n',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    kitchen_b_memo_instr_resp = keyboard.Keyboard(deviceName='kitchen_b_memo_instr_resp')
    
    # --- Initialize components for Routine "memo_fix_isi" ---
    memo_fix_pic = visual.ImageStim(
        win=win,
        name='memo_fix_pic', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "memotest_task" ---
    memotest_task_stim = visual.ImageStim(
        win=win,
        name='memotest_task_stim', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    memotest_task_slider = visual.Slider(win=win, name='memotest_task_slider',
        startValue=None, size=(0.8, 0.05), pos=(0, -0.325), units=win.units,
        labels=['d \n certainly old', 'f \n rather old', 'j \n rather new', 'k \n certainly new'],ticks=None, granularity=1,
        style='radio', styleTweaks=(), opacity=None,
        labelColor='LightGray', markerColor=[1.0000, 1.0000, 1.0000], lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.03,
        flip=False, ori=0.0, depth=-1, readOnly=False)
    memotest_task_slider_key_resp = keyboard.Keyboard(deviceName='memotest_task_slider_key_resp')
    
    # --- Initialize components for Routine "living_a" ---
    living_a_text = visual.TextStim(win=win, name='living_a_text',
        text='living room',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    living_a_text_2 = visual.TextStim(win=win, name='living_a_text_2',
        text='Press SPACE to start block\n\n\n\nfrom 6.',
        font='Open Sans',
        pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    living_a_resp = keyboard.Keyboard(deviceName='living_a_resp')
    living_a_block_no = visual.TextStim(win=win, name='living_a_block_no',
        text='',
        font='Open Sans',
        pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    
    # --- Initialize components for Routine "living_random_isi" ---
    living_random_isi_fix = visual.ImageStim(
        win=win,
        name='living_random_isi_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    living_random_isi_no = visual.TextStim(win=win, name='living_random_isi_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3 , -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    living_random_isi_yes = visual.TextStim(win=win, name='living_random_isi_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3 , -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    living_random_isi_question = visual.TextStim(win=win, name='living_random_isi_question',
        text='Is this a living room?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "living_picture" ---
    living_picture_fix = visual.ImageStim(
        win=win,
        name='living_picture_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    living_picture_image = visual.ImageStim(
        win=win,
        name='living_picture_image', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    living_picture_no = visual.TextStim(win=win, name='living_picture_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    living_picture_yes = visual.TextStim(win=win, name='living_picture_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3 , -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    living_picture_resp = keyboard.Keyboard(deviceName='living_picture_resp')
    living_picture_question = visual.TextStim(win=win, name='living_picture_question',
        text='Is this a living room?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    
    # --- Initialize components for Routine "living_a_memotest_instr" ---
    living_a_memo_instr_text = visual.TextStim(win=win, name='living_a_memo_instr_text',
        text='Now the memory test starts for the living room category.\n\nPress SPACE to start.',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    living_a_memo_instr_resp = keyboard.Keyboard(deviceName='living_a_memo_instr_resp')
    
    # --- Initialize components for Routine "memo_fix_isi" ---
    memo_fix_pic = visual.ImageStim(
        win=win,
        name='memo_fix_pic', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "memotest_task" ---
    memotest_task_stim = visual.ImageStim(
        win=win,
        name='memotest_task_stim', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    memotest_task_slider = visual.Slider(win=win, name='memotest_task_slider',
        startValue=None, size=(0.8, 0.05), pos=(0, -0.325), units=win.units,
        labels=['d \n certainly old', 'f \n rather old', 'j \n rather new', 'k \n certainly new'],ticks=None, granularity=1,
        style='radio', styleTweaks=(), opacity=None,
        labelColor='LightGray', markerColor=[1.0000, 1.0000, 1.0000], lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.03,
        flip=False, ori=0.0, depth=-1, readOnly=False)
    memotest_task_slider_key_resp = keyboard.Keyboard(deviceName='memotest_task_slider_key_resp')
    
    # --- Initialize components for Routine "living_b" ---
    living_b_text = visual.TextStim(win=win, name='living_b_text',
        text='living room',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    living_b_text_2 = visual.TextStim(win=win, name='living_b_text_2',
        text='Press SPACE to start block\n\n\n\nfrom 6.',
        font='Open Sans',
        pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    living_b_resp = keyboard.Keyboard(deviceName='living_b_resp')
    living_b_block_no = visual.TextStim(win=win, name='living_b_block_no',
        text='',
        font='Open Sans',
        pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    
    # --- Initialize components for Routine "living_random_isi" ---
    living_random_isi_fix = visual.ImageStim(
        win=win,
        name='living_random_isi_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    living_random_isi_no = visual.TextStim(win=win, name='living_random_isi_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3 , -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    living_random_isi_yes = visual.TextStim(win=win, name='living_random_isi_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3 , -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    living_random_isi_question = visual.TextStim(win=win, name='living_random_isi_question',
        text='Is this a living room?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "living_picture" ---
    living_picture_fix = visual.ImageStim(
        win=win,
        name='living_picture_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    living_picture_image = visual.ImageStim(
        win=win,
        name='living_picture_image', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    living_picture_no = visual.TextStim(win=win, name='living_picture_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    living_picture_yes = visual.TextStim(win=win, name='living_picture_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3 , -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    living_picture_resp = keyboard.Keyboard(deviceName='living_picture_resp')
    living_picture_question = visual.TextStim(win=win, name='living_picture_question',
        text='Is this a living room?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    
    # --- Initialize components for Routine "living_b_memotest_instr" ---
    living_b_memo_instr_text = visual.TextStim(win=win, name='living_b_memo_instr_text',
        text='Now the memory test starts for the living room category.\n\nPress SPACE to start.',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    living_b_memo_instr_resp = keyboard.Keyboard(deviceName='living_b_memo_instr_resp')
    
    # --- Initialize components for Routine "memo_fix_isi" ---
    memo_fix_pic = visual.ImageStim(
        win=win,
        name='memo_fix_pic', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "memotest_task" ---
    memotest_task_stim = visual.ImageStim(
        win=win,
        name='memotest_task_stim', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    memotest_task_slider = visual.Slider(win=win, name='memotest_task_slider',
        startValue=None, size=(0.8, 0.05), pos=(0, -0.325), units=win.units,
        labels=['d \n certainly old', 'f \n rather old', 'j \n rather new', 'k \n certainly new'],ticks=None, granularity=1,
        style='radio', styleTweaks=(), opacity=None,
        labelColor='LightGray', markerColor=[1.0000, 1.0000, 1.0000], lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.03,
        flip=False, ori=0.0, depth=-1, readOnly=False)
    memotest_task_slider_key_resp = keyboard.Keyboard(deviceName='memotest_task_slider_key_resp')
    
    # --- Initialize components for Routine "bed_a" ---
    bed_a_text = visual.TextStim(win=win, name='bed_a_text',
        text='bedroom',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    bed_a_text_2 = visual.TextStim(win=win, name='bed_a_text_2',
        text='Press SPACE to start block\n\n\n\nfrom 6.',
        font='Open Sans',
        pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    bed_a_resp = keyboard.Keyboard(deviceName='bed_a_resp')
    bed_a_block_no = visual.TextStim(win=win, name='bed_a_block_no',
        text='',
        font='Open Sans',
        pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    
    # --- Initialize components for Routine "bed_random_isi" ---
    bed_random_isi_fix = visual.ImageStim(
        win=win,
        name='bed_random_isi_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    bed_random_isi_no = visual.TextStim(win=win, name='bed_random_isi_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3 , -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    bed_random_isi_yes = visual.TextStim(win=win, name='bed_random_isi_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3 , -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    bed_random_isi_question = visual.TextStim(win=win, name='bed_random_isi_question',
        text='Is this a bedroom?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "bed_picture" ---
    bed_picture_fix = visual.ImageStim(
        win=win,
        name='bed_picture_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    bed_picture_image = visual.ImageStim(
        win=win,
        name='bed_picture_image', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    bed_picture_no = visual.TextStim(win=win, name='bed_picture_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    bed_picture_yes = visual.TextStim(win=win, name='bed_picture_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    bed_picture_resp = keyboard.Keyboard(deviceName='bed_picture_resp')
    bed_picture_question = visual.TextStim(win=win, name='bed_picture_question',
        text='Is this a bedroom?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    
    # --- Initialize components for Routine "bed_a_memotest_instr" ---
    bed_a_memo_instr_text = visual.TextStim(win=win, name='bed_a_memo_instr_text',
        text='Now the memory test starts for the bedroom category.\n\nPress SPACE to start.',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    bed_a_memo_instr_resp = keyboard.Keyboard(deviceName='bed_a_memo_instr_resp')
    
    # --- Initialize components for Routine "memo_fix_isi" ---
    memo_fix_pic = visual.ImageStim(
        win=win,
        name='memo_fix_pic', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "memotest_task" ---
    memotest_task_stim = visual.ImageStim(
        win=win,
        name='memotest_task_stim', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    memotest_task_slider = visual.Slider(win=win, name='memotest_task_slider',
        startValue=None, size=(0.8, 0.05), pos=(0, -0.325), units=win.units,
        labels=['d \n certainly old', 'f \n rather old', 'j \n rather new', 'k \n certainly new'],ticks=None, granularity=1,
        style='radio', styleTweaks=(), opacity=None,
        labelColor='LightGray', markerColor=[1.0000, 1.0000, 1.0000], lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.03,
        flip=False, ori=0.0, depth=-1, readOnly=False)
    memotest_task_slider_key_resp = keyboard.Keyboard(deviceName='memotest_task_slider_key_resp')
    
    # --- Initialize components for Routine "bed_b" ---
    bed_b_text = visual.TextStim(win=win, name='bed_b_text',
        text='bedroom',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    bed_b_text_2 = visual.TextStim(win=win, name='bed_b_text_2',
        text='Press SPACE to start block\n\n\n\nfrom 6.',
        font='Open Sans',
        pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    bed_b_resp = keyboard.Keyboard(deviceName='bed_b_resp')
    bed_b_block_no = visual.TextStim(win=win, name='bed_b_block_no',
        text='',
        font='Open Sans',
        pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    
    # --- Initialize components for Routine "bed_random_isi" ---
    bed_random_isi_fix = visual.ImageStim(
        win=win,
        name='bed_random_isi_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    bed_random_isi_no = visual.TextStim(win=win, name='bed_random_isi_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3 , -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    bed_random_isi_yes = visual.TextStim(win=win, name='bed_random_isi_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3 , -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    bed_random_isi_question = visual.TextStim(win=win, name='bed_random_isi_question',
        text='Is this a bedroom?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "bed_picture" ---
    bed_picture_fix = visual.ImageStim(
        win=win,
        name='bed_picture_fix', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    bed_picture_image = visual.ImageStim(
        win=win,
        name='bed_picture_image', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    bed_picture_no = visual.TextStim(win=win, name='bed_picture_no',
        text='f\n\nno',
        font='Open Sans',
        pos=(-0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    bed_picture_yes = visual.TextStim(win=win, name='bed_picture_yes',
        text=' j\n\nyes',
        font='Open Sans',
        pos=(0.3, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    bed_picture_resp = keyboard.Keyboard(deviceName='bed_picture_resp')
    bed_picture_question = visual.TextStim(win=win, name='bed_picture_question',
        text='Is this a bedroom?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    
    # --- Initialize components for Routine "bed_b_memotest_instr" ---
    bed_b_memo_instr_text = visual.TextStim(win=win, name='bed_b_memo_instr_text',
        text='Now the memory test starts for the bedroom category.\n\nPress SPACE to start.',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    bed_b_memo_instr_resp = keyboard.Keyboard(deviceName='bed_b_memo_instr_resp')
    
    # --- Initialize components for Routine "memo_fix_isi" ---
    memo_fix_pic = visual.ImageStim(
        win=win,
        name='memo_fix_pic', 
        image='fixationskreuz.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.1, 0.1),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "memotest_task" ---
    memotest_task_stim = visual.ImageStim(
        win=win,
        name='memotest_task_stim', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.55, 0.55),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    memotest_task_slider = visual.Slider(win=win, name='memotest_task_slider',
        startValue=None, size=(0.8, 0.05), pos=(0, -0.325), units=win.units,
        labels=['d \n certainly old', 'f \n rather old', 'j \n rather new', 'k \n certainly new'],ticks=None, granularity=1,
        style='radio', styleTweaks=(), opacity=None,
        labelColor='LightGray', markerColor=[1.0000, 1.0000, 1.0000], lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.03,
        flip=False, ori=0.0, depth=-1, readOnly=False)
    memotest_task_slider_key_resp = keyboard.Keyboard(deviceName='memotest_task_slider_key_resp')
    
    # --- Initialize components for Routine "middle_break" ---
    break_text = visual.TextStim(win=win, name='break_text',
        text='This block of the experiment is finished.\n\nPress SPACE to start the next block.',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    break_resp = keyboard.Keyboard(deviceName='break_resp')
    
    # --- Initialize components for Routine "end" ---
    end_text = visual.TextStim(win=win, name='end_text',
        text='-- SceneCat 3 --\n\nThank you for your participation!\n\nPress SPACE to end the experiment.',
        font='Open Sans',
        pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    end_resp = keyboard.Keyboard(deviceName='end_resp')
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "intro" ---
    continueRoutine = True
    # update component parameters for each repeat
    intro_resp.keys = []
    intro_resp.rt = []
    _intro_resp_allKeys = []
    # keep track of which components have finished
    introComponents = [intro_text, intro_resp]
    for thisComponent in introComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "intro" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *intro_text* updates
        
        # if intro_text is starting this frame...
        if intro_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            intro_text.frameNStart = frameN  # exact frame index
            intro_text.tStart = t  # local t and not account for scr refresh
            intro_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(intro_text, 'tStartRefresh')  # time at next scr refresh
            # update status
            intro_text.status = STARTED
            intro_text.setAutoDraw(True)
        
        # if intro_text is active this frame...
        if intro_text.status == STARTED:
            # update params
            pass
        
        # *intro_resp* updates
        waitOnFlip = False
        
        # if intro_resp is starting this frame...
        if intro_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            intro_resp.frameNStart = frameN  # exact frame index
            intro_resp.tStart = t  # local t and not account for scr refresh
            intro_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(intro_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            intro_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(intro_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(intro_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if intro_resp.status == STARTED and not waitOnFlip:
            theseKeys = intro_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _intro_resp_allKeys.extend(theseKeys)
            if len(_intro_resp_allKeys):
                intro_resp.keys = _intro_resp_allKeys[-1].name  # just the last key pressed
                intro_resp.rt = _intro_resp_allKeys[-1].rt
                intro_resp.duration = _intro_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in introComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "intro" ---
    for thisComponent in introComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    # the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "consent" ---
    continueRoutine = True
    # update component parameters for each repeat
    consent_resp.keys = []
    consent_resp.rt = []
    _consent_resp_allKeys = []
    # keep track of which components have finished
    consentComponents = [consent_text, consent_resp]
    for thisComponent in consentComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "consent" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *consent_text* updates
        
        # if consent_text is starting this frame...
        if consent_text.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            consent_text.frameNStart = frameN  # exact frame index
            consent_text.tStart = t  # local t and not account for scr refresh
            consent_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(consent_text, 'tStartRefresh')  # time at next scr refresh
            # update status
            consent_text.status = STARTED
            consent_text.setAutoDraw(True)
        
        # if consent_text is active this frame...
        if consent_text.status == STARTED:
            # update params
            pass
        
        # *consent_resp* updates
        waitOnFlip = False
        
        # if consent_resp is starting this frame...
        if consent_resp.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            consent_resp.frameNStart = frameN  # exact frame index
            consent_resp.tStart = t  # local t and not account for scr refresh
            consent_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(consent_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            consent_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(consent_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(consent_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if consent_resp.status == STARTED and not waitOnFlip:
            theseKeys = consent_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _consent_resp_allKeys.extend(theseKeys)
            if len(_consent_resp_allKeys):
                consent_resp.keys = _consent_resp_allKeys[-1].name  # just the last key pressed
                consent_resp.rt = _consent_resp_allKeys[-1].rt
                consent_resp.duration = _consent_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in consentComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "consent" ---
    for thisComponent in consentComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    # the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "data_safety" ---
    continueRoutine = True
    # update component parameters for each repeat
    data_safety_resp.keys = []
    data_safety_resp.rt = []
    _data_safety_resp_allKeys = []
    # keep track of which components have finished
    data_safetyComponents = [data_safety_text_2, data_safety_resp]
    for thisComponent in data_safetyComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "data_safety" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *data_safety_text_2* updates
        
        # if data_safety_text_2 is starting this frame...
        if data_safety_text_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            data_safety_text_2.frameNStart = frameN  # exact frame index
            data_safety_text_2.tStart = t  # local t and not account for scr refresh
            data_safety_text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(data_safety_text_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            data_safety_text_2.status = STARTED
            data_safety_text_2.setAutoDraw(True)
        
        # if data_safety_text_2 is active this frame...
        if data_safety_text_2.status == STARTED:
            # update params
            pass
        
        # *data_safety_resp* updates
        waitOnFlip = False
        
        # if data_safety_resp is starting this frame...
        if data_safety_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            data_safety_resp.frameNStart = frameN  # exact frame index
            data_safety_resp.tStart = t  # local t and not account for scr refresh
            data_safety_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(data_safety_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            data_safety_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(data_safety_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(data_safety_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if data_safety_resp.status == STARTED and not waitOnFlip:
            theseKeys = data_safety_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _data_safety_resp_allKeys.extend(theseKeys)
            if len(_data_safety_resp_allKeys):
                data_safety_resp.keys = _data_safety_resp_allKeys[-1].name  # just the last key pressed
                data_safety_resp.rt = _data_safety_resp_allKeys[-1].rt
                data_safety_resp.duration = _data_safety_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in data_safetyComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "data_safety" ---
    for thisComponent in data_safetyComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    # the Routine "data_safety" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "data_safety_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    data_safety_2_resp.keys = []
    data_safety_2_resp.rt = []
    _data_safety_2_resp_allKeys = []
    # keep track of which components have finished
    data_safety_2Components = [data_safety_2_text_2, data_safety_2_resp]
    for thisComponent in data_safety_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "data_safety_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *data_safety_2_text_2* updates
        
        # if data_safety_2_text_2 is starting this frame...
        if data_safety_2_text_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            data_safety_2_text_2.frameNStart = frameN  # exact frame index
            data_safety_2_text_2.tStart = t  # local t and not account for scr refresh
            data_safety_2_text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(data_safety_2_text_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            data_safety_2_text_2.status = STARTED
            data_safety_2_text_2.setAutoDraw(True)
        
        # if data_safety_2_text_2 is active this frame...
        if data_safety_2_text_2.status == STARTED:
            # update params
            pass
        
        # *data_safety_2_resp* updates
        waitOnFlip = False
        
        # if data_safety_2_resp is starting this frame...
        if data_safety_2_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            data_safety_2_resp.frameNStart = frameN  # exact frame index
            data_safety_2_resp.tStart = t  # local t and not account for scr refresh
            data_safety_2_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(data_safety_2_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            data_safety_2_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(data_safety_2_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(data_safety_2_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if data_safety_2_resp.status == STARTED and not waitOnFlip:
            theseKeys = data_safety_2_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _data_safety_2_resp_allKeys.extend(theseKeys)
            if len(_data_safety_2_resp_allKeys):
                data_safety_2_resp.keys = _data_safety_2_resp_allKeys[-1].name  # just the last key pressed
                data_safety_2_resp.rt = _data_safety_2_resp_allKeys[-1].rt
                data_safety_2_resp.duration = _data_safety_2_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in data_safety_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "data_safety_2" ---
    for thisComponent in data_safety_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    # the Routine "data_safety_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instructions_cat" ---
    continueRoutine = True
    # update component parameters for each repeat
    instructions_cat_resp.keys = []
    instructions_cat_resp.rt = []
    _instructions_cat_resp_allKeys = []
    # keep track of which components have finished
    instructions_catComponents = [instructions_cat_text_2, instructions_cat_resp]
    for thisComponent in instructions_catComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instructions_cat" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instructions_cat_text_2* updates
        
        # if instructions_cat_text_2 is starting this frame...
        if instructions_cat_text_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            instructions_cat_text_2.frameNStart = frameN  # exact frame index
            instructions_cat_text_2.tStart = t  # local t and not account for scr refresh
            instructions_cat_text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructions_cat_text_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            instructions_cat_text_2.status = STARTED
            instructions_cat_text_2.setAutoDraw(True)
        
        # if instructions_cat_text_2 is active this frame...
        if instructions_cat_text_2.status == STARTED:
            # update params
            pass
        
        # *instructions_cat_resp* updates
        waitOnFlip = False
        
        # if instructions_cat_resp is starting this frame...
        if instructions_cat_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            instructions_cat_resp.frameNStart = frameN  # exact frame index
            instructions_cat_resp.tStart = t  # local t and not account for scr refresh
            instructions_cat_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructions_cat_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            instructions_cat_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instructions_cat_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instructions_cat_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instructions_cat_resp.status == STARTED and not waitOnFlip:
            theseKeys = instructions_cat_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _instructions_cat_resp_allKeys.extend(theseKeys)
            if len(_instructions_cat_resp_allKeys):
                instructions_cat_resp.keys = _instructions_cat_resp_allKeys[-1].name  # just the last key pressed
                instructions_cat_resp.rt = _instructions_cat_resp_allKeys[-1].rt
                instructions_cat_resp.duration = _instructions_cat_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructions_catComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instructions_cat" ---
    for thisComponent in instructions_catComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    # the Routine "instructions_cat" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instructions_cat_2" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('instructions_cat_2.started', globalClock.getTime(format='float'))
    instructions_cat_2_resp.keys = []
    instructions_cat_2_resp.rt = []
    _instructions_cat_2_resp_allKeys = []
    # keep track of which components have finished
    instructions_cat_2Components = [instructions_cat_2_text, instructions_cat_2_resp]
    for thisComponent in instructions_cat_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instructions_cat_2" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instructions_cat_2_text* updates
        
        # if instructions_cat_2_text is starting this frame...
        if instructions_cat_2_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instructions_cat_2_text.frameNStart = frameN  # exact frame index
            instructions_cat_2_text.tStart = t  # local t and not account for scr refresh
            instructions_cat_2_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructions_cat_2_text, 'tStartRefresh')  # time at next scr refresh
            # update status
            instructions_cat_2_text.status = STARTED
            instructions_cat_2_text.setAutoDraw(True)
        
        # if instructions_cat_2_text is active this frame...
        if instructions_cat_2_text.status == STARTED:
            # update params
            pass
        
        # *instructions_cat_2_resp* updates
        waitOnFlip = False
        
        # if instructions_cat_2_resp is starting this frame...
        if instructions_cat_2_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instructions_cat_2_resp.frameNStart = frameN  # exact frame index
            instructions_cat_2_resp.tStart = t  # local t and not account for scr refresh
            instructions_cat_2_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructions_cat_2_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            instructions_cat_2_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instructions_cat_2_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instructions_cat_2_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instructions_cat_2_resp.status == STARTED and not waitOnFlip:
            theseKeys = instructions_cat_2_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _instructions_cat_2_resp_allKeys.extend(theseKeys)
            if len(_instructions_cat_2_resp_allKeys):
                instructions_cat_2_resp.keys = _instructions_cat_2_resp_allKeys[-1].name  # just the last key pressed
                instructions_cat_2_resp.rt = _instructions_cat_2_resp_allKeys[-1].rt
                instructions_cat_2_resp.duration = _instructions_cat_2_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructions_cat_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instructions_cat_2" ---
    for thisComponent in instructions_cat_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('instructions_cat_2.stopped', globalClock.getTime(format='float'))
    thisExp.nextEntry()
    # the Routine "instructions_cat_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "category_test_text" ---
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    category_test_textComponents = [category_test_word]
    for thisComponent in category_test_textComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "category_test_text" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 2.5:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *category_test_word* updates
        
        # if category_test_word is starting this frame...
        if category_test_word.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            category_test_word.frameNStart = frameN  # exact frame index
            category_test_word.tStart = t  # local t and not account for scr refresh
            category_test_word.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(category_test_word, 'tStartRefresh')  # time at next scr refresh
            # update status
            category_test_word.status = STARTED
            category_test_word.setAutoDraw(True)
        
        # if category_test_word is active this frame...
        if category_test_word.status == STARTED:
            # update params
            pass
        
        # if category_test_word is stopping this frame...
        if category_test_word.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > category_test_word.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                category_test_word.tStop = t  # not accounting for scr refresh
                category_test_word.tStopRefresh = tThisFlipGlobal  # on global time
                category_test_word.frameNStop = frameN  # exact frame index
                # update status
                category_test_word.status = FINISHED
                category_test_word.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in category_test_textComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "category_test_text" ---
    for thisComponent in category_test_textComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-2.500000)
    thisExp.nextEntry()
    
    # set up handler to look after randomisation of conditions etc
    cat_training_trials = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('conditions_cat_training.xlsx'),
        seed=None, name='cat_training_trials')
    thisExp.addLoop(cat_training_trials)  # add the loop to the experiment
    thisCat_training_trial = cat_training_trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisCat_training_trial.rgb)
    if thisCat_training_trial != None:
        for paramName in thisCat_training_trial:
            globals()[paramName] = thisCat_training_trial[paramName]
    
    for thisCat_training_trial in cat_training_trials:
        currentLoop = cat_training_trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisCat_training_trial.rgb)
        if thisCat_training_trial != None:
            for paramName in thisCat_training_trial:
                globals()[paramName] = thisCat_training_trial[paramName]
        
        # --- Prepare to start Routine "fix_categorization_training" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from random_isi_code_cat_training
        # Random Zeit ziehen für Fixationskreuzpräsentation
        import random
        time=random.uniform(0.9,1.9)
        # keep track of which components have finished
        fix_categorization_trainingComponents = [fix_cat_training_question, fix_cat_training_no, fix_cat_training_yes, fix_cat_training_pic]
        for thisComponent in fix_categorization_trainingComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "fix_categorization_training" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fix_cat_training_question* updates
            
            # if fix_cat_training_question is starting this frame...
            if fix_cat_training_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fix_cat_training_question.frameNStart = frameN  # exact frame index
                fix_cat_training_question.tStart = t  # local t and not account for scr refresh
                fix_cat_training_question.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fix_cat_training_question, 'tStartRefresh')  # time at next scr refresh
                # update status
                fix_cat_training_question.status = STARTED
                fix_cat_training_question.setAutoDraw(True)
            
            # if fix_cat_training_question is active this frame...
            if fix_cat_training_question.status == STARTED:
                # update params
                pass
            
            # if fix_cat_training_question is stopping this frame...
            if fix_cat_training_question.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fix_cat_training_question.tStartRefresh + time-frameTolerance:
                    # keep track of stop time/frame for later
                    fix_cat_training_question.tStop = t  # not accounting for scr refresh
                    fix_cat_training_question.tStopRefresh = tThisFlipGlobal  # on global time
                    fix_cat_training_question.frameNStop = frameN  # exact frame index
                    # update status
                    fix_cat_training_question.status = FINISHED
                    fix_cat_training_question.setAutoDraw(False)
            
            # *fix_cat_training_no* updates
            
            # if fix_cat_training_no is starting this frame...
            if fix_cat_training_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fix_cat_training_no.frameNStart = frameN  # exact frame index
                fix_cat_training_no.tStart = t  # local t and not account for scr refresh
                fix_cat_training_no.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fix_cat_training_no, 'tStartRefresh')  # time at next scr refresh
                # update status
                fix_cat_training_no.status = STARTED
                fix_cat_training_no.setAutoDraw(True)
            
            # if fix_cat_training_no is active this frame...
            if fix_cat_training_no.status == STARTED:
                # update params
                pass
            
            # if fix_cat_training_no is stopping this frame...
            if fix_cat_training_no.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fix_cat_training_no.tStartRefresh + time-frameTolerance:
                    # keep track of stop time/frame for later
                    fix_cat_training_no.tStop = t  # not accounting for scr refresh
                    fix_cat_training_no.tStopRefresh = tThisFlipGlobal  # on global time
                    fix_cat_training_no.frameNStop = frameN  # exact frame index
                    # update status
                    fix_cat_training_no.status = FINISHED
                    fix_cat_training_no.setAutoDraw(False)
            
            # *fix_cat_training_yes* updates
            
            # if fix_cat_training_yes is starting this frame...
            if fix_cat_training_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fix_cat_training_yes.frameNStart = frameN  # exact frame index
                fix_cat_training_yes.tStart = t  # local t and not account for scr refresh
                fix_cat_training_yes.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fix_cat_training_yes, 'tStartRefresh')  # time at next scr refresh
                # update status
                fix_cat_training_yes.status = STARTED
                fix_cat_training_yes.setAutoDraw(True)
            
            # if fix_cat_training_yes is active this frame...
            if fix_cat_training_yes.status == STARTED:
                # update params
                pass
            
            # if fix_cat_training_yes is stopping this frame...
            if fix_cat_training_yes.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fix_cat_training_yes.tStartRefresh + time-frameTolerance:
                    # keep track of stop time/frame for later
                    fix_cat_training_yes.tStop = t  # not accounting for scr refresh
                    fix_cat_training_yes.tStopRefresh = tThisFlipGlobal  # on global time
                    fix_cat_training_yes.frameNStop = frameN  # exact frame index
                    # update status
                    fix_cat_training_yes.status = FINISHED
                    fix_cat_training_yes.setAutoDraw(False)
            
            # *fix_cat_training_pic* updates
            
            # if fix_cat_training_pic is starting this frame...
            if fix_cat_training_pic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fix_cat_training_pic.frameNStart = frameN  # exact frame index
                fix_cat_training_pic.tStart = t  # local t and not account for scr refresh
                fix_cat_training_pic.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fix_cat_training_pic, 'tStartRefresh')  # time at next scr refresh
                # update status
                fix_cat_training_pic.status = STARTED
                fix_cat_training_pic.setAutoDraw(True)
            
            # if fix_cat_training_pic is active this frame...
            if fix_cat_training_pic.status == STARTED:
                # update params
                pass
            
            # if fix_cat_training_pic is stopping this frame...
            if fix_cat_training_pic.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fix_cat_training_pic.tStartRefresh + time-frameTolerance:
                    # keep track of stop time/frame for later
                    fix_cat_training_pic.tStop = t  # not accounting for scr refresh
                    fix_cat_training_pic.tStopRefresh = tThisFlipGlobal  # on global time
                    fix_cat_training_pic.frameNStop = frameN  # exact frame index
                    # update status
                    fix_cat_training_pic.status = FINISHED
                    fix_cat_training_pic.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fix_categorization_trainingComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "fix_categorization_training" ---
        for thisComponent in fix_categorization_trainingComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "fix_categorization_training" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "categorization_training" ---
        continueRoutine = True
        # update component parameters for each repeat
        cat_training_stim.setImage(stimulus)
        cat_training_key.keys = []
        cat_training_key.rt = []
        _cat_training_key_allKeys = []
        # keep track of which components have finished
        categorization_trainingComponents = [cat_training_fix, cat_training_stim, cat_training_key, cat_training_question, cat_training_no, cat_training_yes]
        for thisComponent in categorization_trainingComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "categorization_training" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *cat_training_fix* updates
            
            # if cat_training_fix is starting this frame...
            if cat_training_fix.status == NOT_STARTED and tThisFlip >= 0.75-frameTolerance:
                # keep track of start time/frame for later
                cat_training_fix.frameNStart = frameN  # exact frame index
                cat_training_fix.tStart = t  # local t and not account for scr refresh
                cat_training_fix.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cat_training_fix, 'tStartRefresh')  # time at next scr refresh
                # update status
                cat_training_fix.status = STARTED
                cat_training_fix.setAutoDraw(True)
            
            # if cat_training_fix is active this frame...
            if cat_training_fix.status == STARTED:
                # update params
                pass
            
            # *cat_training_stim* updates
            
            # if cat_training_stim is starting this frame...
            if cat_training_stim.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cat_training_stim.frameNStart = frameN  # exact frame index
                cat_training_stim.tStart = t  # local t and not account for scr refresh
                cat_training_stim.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cat_training_stim, 'tStartRefresh')  # time at next scr refresh
                # update status
                cat_training_stim.status = STARTED
                cat_training_stim.setAutoDraw(True)
            
            # if cat_training_stim is active this frame...
            if cat_training_stim.status == STARTED:
                # update params
                pass
            
            # if cat_training_stim is stopping this frame...
            if cat_training_stim.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cat_training_stim.tStartRefresh + 0.75-frameTolerance:
                    # keep track of stop time/frame for later
                    cat_training_stim.tStop = t  # not accounting for scr refresh
                    cat_training_stim.tStopRefresh = tThisFlipGlobal  # on global time
                    cat_training_stim.frameNStop = frameN  # exact frame index
                    # update status
                    cat_training_stim.status = FINISHED
                    cat_training_stim.setAutoDraw(False)
            
            # *cat_training_key* updates
            waitOnFlip = False
            
            # if cat_training_key is starting this frame...
            if cat_training_key.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                cat_training_key.frameNStart = frameN  # exact frame index
                cat_training_key.tStart = t  # local t and not account for scr refresh
                cat_training_key.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cat_training_key, 'tStartRefresh')  # time at next scr refresh
                # update status
                cat_training_key.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(cat_training_key.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(cat_training_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if cat_training_key.status == STARTED and not waitOnFlip:
                theseKeys = cat_training_key.getKeys(keyList=['f','j'], ignoreKeys=["escape"], waitRelease=False)
                _cat_training_key_allKeys.extend(theseKeys)
                if len(_cat_training_key_allKeys):
                    cat_training_key.keys = _cat_training_key_allKeys[-1].name  # just the last key pressed
                    cat_training_key.rt = _cat_training_key_allKeys[-1].rt
                    cat_training_key.duration = _cat_training_key_allKeys[-1].duration
                    # was this correct?
                    if (cat_training_key.keys == str(correct_answer)) or (cat_training_key.keys == correct_answer):
                        cat_training_key.corr = 1
                    else:
                        cat_training_key.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *cat_training_question* updates
            
            # if cat_training_question is starting this frame...
            if cat_training_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cat_training_question.frameNStart = frameN  # exact frame index
                cat_training_question.tStart = t  # local t and not account for scr refresh
                cat_training_question.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cat_training_question, 'tStartRefresh')  # time at next scr refresh
                # update status
                cat_training_question.status = STARTED
                cat_training_question.setAutoDraw(True)
            
            # if cat_training_question is active this frame...
            if cat_training_question.status == STARTED:
                # update params
                pass
            
            # *cat_training_no* updates
            
            # if cat_training_no is starting this frame...
            if cat_training_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cat_training_no.frameNStart = frameN  # exact frame index
                cat_training_no.tStart = t  # local t and not account for scr refresh
                cat_training_no.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cat_training_no, 'tStartRefresh')  # time at next scr refresh
                # update status
                cat_training_no.status = STARTED
                cat_training_no.setAutoDraw(True)
            
            # if cat_training_no is active this frame...
            if cat_training_no.status == STARTED:
                # update params
                pass
            
            # *cat_training_yes* updates
            
            # if cat_training_yes is starting this frame...
            if cat_training_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cat_training_yes.frameNStart = frameN  # exact frame index
                cat_training_yes.tStart = t  # local t and not account for scr refresh
                cat_training_yes.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cat_training_yes, 'tStartRefresh')  # time at next scr refresh
                # update status
                cat_training_yes.status = STARTED
                cat_training_yes.setAutoDraw(True)
            
            # if cat_training_yes is active this frame...
            if cat_training_yes.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in categorization_trainingComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "categorization_training" ---
        for thisComponent in categorization_trainingComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if cat_training_key.keys in ['', [], None]:  # No response was made
            cat_training_key.keys = None
            # was no response the correct answer?!
            if str(correct_answer).lower() == 'none':
               cat_training_key.corr = 1;  # correct non-response
            else:
               cat_training_key.corr = 0;  # failed to respond (incorrectly)
        # store data for cat_training_trials (TrialHandler)
        cat_training_trials.addData('cat_training_key.keys',cat_training_key.keys)
        cat_training_trials.addData('cat_training_key.corr', cat_training_key.corr)
        if cat_training_key.keys != None:  # we had a response
            cat_training_trials.addData('cat_training_key.rt', cat_training_key.rt)
            cat_training_trials.addData('cat_training_key.duration', cat_training_key.duration)
        # the Routine "categorization_training" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "cat_training_feedback" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from cat_train_feedb_code
        if cat_training_key.corr == 1:
            cat_training_feedb_eval = "correct"
        else:
            cat_training_feedb_eval = "wrong"
        cat_train_feedback_text.setText(cat_training_feedb_eval)
        # keep track of which components have finished
        cat_training_feedbackComponents = [cat_train_feedback_text, cat_train_feedb_no, cat_train_feedb_yes, cat_train_feedb_question]
        for thisComponent in cat_training_feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "cat_training_feedback" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *cat_train_feedback_text* updates
            
            # if cat_train_feedback_text is starting this frame...
            if cat_train_feedback_text.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                cat_train_feedback_text.frameNStart = frameN  # exact frame index
                cat_train_feedback_text.tStart = t  # local t and not account for scr refresh
                cat_train_feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cat_train_feedback_text, 'tStartRefresh')  # time at next scr refresh
                # update status
                cat_train_feedback_text.status = STARTED
                cat_train_feedback_text.setAutoDraw(True)
            
            # if cat_train_feedback_text is active this frame...
            if cat_train_feedback_text.status == STARTED:
                # update params
                pass
            
            # if cat_train_feedback_text is stopping this frame...
            if cat_train_feedback_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cat_train_feedback_text.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    cat_train_feedback_text.tStop = t  # not accounting for scr refresh
                    cat_train_feedback_text.tStopRefresh = tThisFlipGlobal  # on global time
                    cat_train_feedback_text.frameNStop = frameN  # exact frame index
                    # update status
                    cat_train_feedback_text.status = FINISHED
                    cat_train_feedback_text.setAutoDraw(False)
            
            # *cat_train_feedb_no* updates
            
            # if cat_train_feedb_no is starting this frame...
            if cat_train_feedb_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cat_train_feedb_no.frameNStart = frameN  # exact frame index
                cat_train_feedb_no.tStart = t  # local t and not account for scr refresh
                cat_train_feedb_no.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cat_train_feedb_no, 'tStartRefresh')  # time at next scr refresh
                # update status
                cat_train_feedb_no.status = STARTED
                cat_train_feedb_no.setAutoDraw(True)
            
            # if cat_train_feedb_no is active this frame...
            if cat_train_feedb_no.status == STARTED:
                # update params
                pass
            
            # if cat_train_feedb_no is stopping this frame...
            if cat_train_feedb_no.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cat_train_feedb_no.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    cat_train_feedb_no.tStop = t  # not accounting for scr refresh
                    cat_train_feedb_no.tStopRefresh = tThisFlipGlobal  # on global time
                    cat_train_feedb_no.frameNStop = frameN  # exact frame index
                    # update status
                    cat_train_feedb_no.status = FINISHED
                    cat_train_feedb_no.setAutoDraw(False)
            
            # *cat_train_feedb_yes* updates
            
            # if cat_train_feedb_yes is starting this frame...
            if cat_train_feedb_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cat_train_feedb_yes.frameNStart = frameN  # exact frame index
                cat_train_feedb_yes.tStart = t  # local t and not account for scr refresh
                cat_train_feedb_yes.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cat_train_feedb_yes, 'tStartRefresh')  # time at next scr refresh
                # update status
                cat_train_feedb_yes.status = STARTED
                cat_train_feedb_yes.setAutoDraw(True)
            
            # if cat_train_feedb_yes is active this frame...
            if cat_train_feedb_yes.status == STARTED:
                # update params
                pass
            
            # if cat_train_feedb_yes is stopping this frame...
            if cat_train_feedb_yes.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cat_train_feedb_yes.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    cat_train_feedb_yes.tStop = t  # not accounting for scr refresh
                    cat_train_feedb_yes.tStopRefresh = tThisFlipGlobal  # on global time
                    cat_train_feedb_yes.frameNStop = frameN  # exact frame index
                    # update status
                    cat_train_feedb_yes.status = FINISHED
                    cat_train_feedb_yes.setAutoDraw(False)
            
            # *cat_train_feedb_question* updates
            
            # if cat_train_feedb_question is starting this frame...
            if cat_train_feedb_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cat_train_feedb_question.frameNStart = frameN  # exact frame index
                cat_train_feedb_question.tStart = t  # local t and not account for scr refresh
                cat_train_feedb_question.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cat_train_feedb_question, 'tStartRefresh')  # time at next scr refresh
                # update status
                cat_train_feedb_question.status = STARTED
                cat_train_feedb_question.setAutoDraw(True)
            
            # if cat_train_feedb_question is active this frame...
            if cat_train_feedb_question.status == STARTED:
                # update params
                pass
            
            # if cat_train_feedb_question is stopping this frame...
            if cat_train_feedb_question.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cat_train_feedb_question.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    cat_train_feedb_question.tStop = t  # not accounting for scr refresh
                    cat_train_feedb_question.tStopRefresh = tThisFlipGlobal  # on global time
                    cat_train_feedb_question.frameNStop = frameN  # exact frame index
                    # update status
                    cat_train_feedb_question.status = FINISHED
                    cat_train_feedb_question.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in cat_training_feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "cat_training_feedback" ---
        for thisComponent in cat_training_feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1.0 repeats of 'cat_training_trials'
    
    
    # --- Prepare to start Routine "instruction_memo" ---
    continueRoutine = True
    # update component parameters for each repeat
    instructions_memo_resp.keys = []
    instructions_memo_resp.rt = []
    _instructions_memo_resp_allKeys = []
    # keep track of which components have finished
    instruction_memoComponents = [instructions_memo_text, instructions_memo_resp]
    for thisComponent in instruction_memoComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instruction_memo" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instructions_memo_text* updates
        
        # if instructions_memo_text is starting this frame...
        if instructions_memo_text.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            instructions_memo_text.frameNStart = frameN  # exact frame index
            instructions_memo_text.tStart = t  # local t and not account for scr refresh
            instructions_memo_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructions_memo_text, 'tStartRefresh')  # time at next scr refresh
            # update status
            instructions_memo_text.status = STARTED
            instructions_memo_text.setAutoDraw(True)
        
        # if instructions_memo_text is active this frame...
        if instructions_memo_text.status == STARTED:
            # update params
            pass
        
        # *instructions_memo_resp* updates
        waitOnFlip = False
        
        # if instructions_memo_resp is starting this frame...
        if instructions_memo_resp.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            instructions_memo_resp.frameNStart = frameN  # exact frame index
            instructions_memo_resp.tStart = t  # local t and not account for scr refresh
            instructions_memo_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructions_memo_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            instructions_memo_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instructions_memo_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instructions_memo_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instructions_memo_resp.status == STARTED and not waitOnFlip:
            theseKeys = instructions_memo_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _instructions_memo_resp_allKeys.extend(theseKeys)
            if len(_instructions_memo_resp_allKeys):
                instructions_memo_resp.keys = _instructions_memo_resp_allKeys[-1].name  # just the last key pressed
                instructions_memo_resp.rt = _instructions_memo_resp_allKeys[-1].rt
                instructions_memo_resp.duration = _instructions_memo_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction_memoComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instruction_memo" ---
    for thisComponent in instruction_memoComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    # the Routine "instruction_memo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    memo_training_trials = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('conditions_memo_training.xlsx'),
        seed=None, name='memo_training_trials')
    thisExp.addLoop(memo_training_trials)  # add the loop to the experiment
    thisMemo_training_trial = memo_training_trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisMemo_training_trial.rgb)
    if thisMemo_training_trial != None:
        for paramName in thisMemo_training_trial:
            globals()[paramName] = thisMemo_training_trial[paramName]
    
    for thisMemo_training_trial in memo_training_trials:
        currentLoop = memo_training_trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisMemo_training_trial.rgb)
        if thisMemo_training_trial != None:
            for paramName in thisMemo_training_trial:
                globals()[paramName] = thisMemo_training_trial[paramName]
        
        # --- Prepare to start Routine "memo_fix_isi" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from random_isi_code_memo
        # Random Zeit ziehen für Fixationskreuzpräsentation
        import random
        time=random.uniform(0.2,1)
        # keep track of which components have finished
        memo_fix_isiComponents = [memo_fix_pic]
        for thisComponent in memo_fix_isiComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "memo_fix_isi" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *memo_fix_pic* updates
            
            # if memo_fix_pic is starting this frame...
            if memo_fix_pic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                memo_fix_pic.frameNStart = frameN  # exact frame index
                memo_fix_pic.tStart = t  # local t and not account for scr refresh
                memo_fix_pic.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(memo_fix_pic, 'tStartRefresh')  # time at next scr refresh
                # update status
                memo_fix_pic.status = STARTED
                memo_fix_pic.setAutoDraw(True)
            
            # if memo_fix_pic is active this frame...
            if memo_fix_pic.status == STARTED:
                # update params
                pass
            
            # if memo_fix_pic is stopping this frame...
            if memo_fix_pic.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > memo_fix_pic.tStartRefresh + time-frameTolerance:
                    # keep track of stop time/frame for later
                    memo_fix_pic.tStop = t  # not accounting for scr refresh
                    memo_fix_pic.tStopRefresh = tThisFlipGlobal  # on global time
                    memo_fix_pic.frameNStop = frameN  # exact frame index
                    # update status
                    memo_fix_pic.status = FINISHED
                    memo_fix_pic.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in memo_fix_isiComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "memo_fix_isi" ---
        for thisComponent in memo_fix_isiComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "memo_fix_isi" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "memo_training" ---
        continueRoutine = True
        # update component parameters for each repeat
        memo_training_stim.setImage(stimulus)
        memo_training_slider.reset()
        memo_training_slider_key_resp.keys = []
        memo_training_slider_key_resp.rt = []
        _memo_training_slider_key_resp_allKeys = []
        # keep track of which components have finished
        memo_trainingComponents = [memo_training_fix, memo_training_stim, memo_training_slider, memo_training_slider_key_resp]
        for thisComponent in memo_trainingComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "memo_training" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *memo_training_fix* updates
            
            # if memo_training_fix is starting this frame...
            if memo_training_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                memo_training_fix.frameNStart = frameN  # exact frame index
                memo_training_fix.tStart = t  # local t and not account for scr refresh
                memo_training_fix.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(memo_training_fix, 'tStartRefresh')  # time at next scr refresh
                # update status
                memo_training_fix.status = STARTED
                memo_training_fix.setAutoDraw(True)
            
            # if memo_training_fix is active this frame...
            if memo_training_fix.status == STARTED:
                # update params
                pass
            
            # *memo_training_stim* updates
            
            # if memo_training_stim is starting this frame...
            if memo_training_stim.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                memo_training_stim.frameNStart = frameN  # exact frame index
                memo_training_stim.tStart = t  # local t and not account for scr refresh
                memo_training_stim.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(memo_training_stim, 'tStartRefresh')  # time at next scr refresh
                # update status
                memo_training_stim.status = STARTED
                memo_training_stim.setAutoDraw(True)
            
            # if memo_training_stim is active this frame...
            if memo_training_stim.status == STARTED:
                # update params
                pass
            
            # *memo_training_slider* updates
            
            # if memo_training_slider is starting this frame...
            if memo_training_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                memo_training_slider.frameNStart = frameN  # exact frame index
                memo_training_slider.tStart = t  # local t and not account for scr refresh
                memo_training_slider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(memo_training_slider, 'tStartRefresh')  # time at next scr refresh
                # update status
                memo_training_slider.status = STARTED
                memo_training_slider.setAutoDraw(True)
            
            # if memo_training_slider is active this frame...
            if memo_training_slider.status == STARTED:
                # update params
                pass
            
            # *memo_training_slider_key_resp* updates
            waitOnFlip = False
            
            # if memo_training_slider_key_resp is starting this frame...
            if memo_training_slider_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                memo_training_slider_key_resp.frameNStart = frameN  # exact frame index
                memo_training_slider_key_resp.tStart = t  # local t and not account for scr refresh
                memo_training_slider_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(memo_training_slider_key_resp, 'tStartRefresh')  # time at next scr refresh
                # update status
                memo_training_slider_key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(memo_training_slider_key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(memo_training_slider_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if memo_training_slider_key_resp.status == STARTED and not waitOnFlip:
                theseKeys = memo_training_slider_key_resp.getKeys(keyList=['d', 'f', 'j', 'k'], ignoreKeys=["escape"], waitRelease=False)
                _memo_training_slider_key_resp_allKeys.extend(theseKeys)
                if len(_memo_training_slider_key_resp_allKeys):
                    memo_training_slider_key_resp.keys = _memo_training_slider_key_resp_allKeys[0].name  # just the first key pressed
                    memo_training_slider_key_resp.rt = _memo_training_slider_key_resp_allKeys[0].rt
                    memo_training_slider_key_resp.duration = _memo_training_slider_key_resp_allKeys[0].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in memo_trainingComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "memo_training" ---
        for thisComponent in memo_trainingComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if memo_training_slider_key_resp.keys in ['', [], None]:  # No response was made
            memo_training_slider_key_resp.keys = None
        memo_training_trials.addData('memo_training_slider_key_resp.keys',memo_training_slider_key_resp.keys)
        if memo_training_slider_key_resp.keys != None:  # we had a response
            memo_training_trials.addData('memo_training_slider_key_resp.rt', memo_training_slider_key_resp.rt)
            memo_training_trials.addData('memo_training_slider_key_resp.duration', memo_training_slider_key_resp.duration)
        # the Routine "memo_training" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "memo_training_feedback" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from memo_train_feedb_code
        if (memo_training_slider_key_resp.keys == 'd' or memo_training_slider_key_resp.keys == 'f'): 
            rating = 1
        else:
            rating = 3
        
        if rating == correct_1:
            memo_train_feedb_eval = 'correct'
        else:
            memo_train_feedb_eval = 'wrong'
        memo_train_feedb_text.setText(memo_train_feedb_eval)
        # keep track of which components have finished
        memo_training_feedbackComponents = [memo_train_feedb_text]
        for thisComponent in memo_training_feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "memo_training_feedback" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *memo_train_feedb_text* updates
            
            # if memo_train_feedb_text is starting this frame...
            if memo_train_feedb_text.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                memo_train_feedb_text.frameNStart = frameN  # exact frame index
                memo_train_feedb_text.tStart = t  # local t and not account for scr refresh
                memo_train_feedb_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(memo_train_feedb_text, 'tStartRefresh')  # time at next scr refresh
                # update status
                memo_train_feedb_text.status = STARTED
                memo_train_feedb_text.setAutoDraw(True)
            
            # if memo_train_feedb_text is active this frame...
            if memo_train_feedb_text.status == STARTED:
                # update params
                pass
            
            # if memo_train_feedb_text is stopping this frame...
            if memo_train_feedb_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > memo_train_feedb_text.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    memo_train_feedb_text.tStop = t  # not accounting for scr refresh
                    memo_train_feedb_text.tStopRefresh = tThisFlipGlobal  # on global time
                    memo_train_feedb_text.frameNStop = frameN  # exact frame index
                    # update status
                    memo_train_feedb_text.status = FINISHED
                    memo_train_feedb_text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in memo_training_feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "memo_training_feedback" ---
        for thisComponent in memo_training_feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 1.0 repeats of 'memo_training_trials'
    
    
    # --- Prepare to start Routine "start_categorization" ---
    continueRoutine = True
    # update component parameters for each repeat
    start_cat_resp.keys = []
    start_cat_resp.rt = []
    _start_cat_resp_allKeys = []
    # keep track of which components have finished
    start_categorizationComponents = [start_cat_text, start_cat_resp]
    for thisComponent in start_categorizationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "start_categorization" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *start_cat_text* updates
        
        # if start_cat_text is starting this frame...
        if start_cat_text.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            start_cat_text.frameNStart = frameN  # exact frame index
            start_cat_text.tStart = t  # local t and not account for scr refresh
            start_cat_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(start_cat_text, 'tStartRefresh')  # time at next scr refresh
            # update status
            start_cat_text.status = STARTED
            start_cat_text.setAutoDraw(True)
        
        # if start_cat_text is active this frame...
        if start_cat_text.status == STARTED:
            # update params
            pass
        
        # *start_cat_resp* updates
        waitOnFlip = False
        
        # if start_cat_resp is starting this frame...
        if start_cat_resp.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            start_cat_resp.frameNStart = frameN  # exact frame index
            start_cat_resp.tStart = t  # local t and not account for scr refresh
            start_cat_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(start_cat_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            start_cat_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(start_cat_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(start_cat_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if start_cat_resp.status == STARTED and not waitOnFlip:
            theseKeys = start_cat_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _start_cat_resp_allKeys.extend(theseKeys)
            if len(_start_cat_resp_allKeys):
                start_cat_resp.keys = _start_cat_resp_allKeys[-1].name  # just the last key pressed
                start_cat_resp.rt = _start_cat_resp_allKeys[-1].rt
                start_cat_resp.duration = _start_cat_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in start_categorizationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "start_categorization" ---
    for thisComponent in start_categorizationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    # the Routine "start_categorization" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    categorization_trials = data.TrialHandler(nReps=0.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(conditions_block_order),
        seed=None, name='categorization_trials')
    thisExp.addLoop(categorization_trials)  # add the loop to the experiment
    thisCategorization_trial = categorization_trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisCategorization_trial.rgb)
    if thisCategorization_trial != None:
        for paramName in thisCategorization_trial:
            globals()[paramName] = thisCategorization_trial[paramName]
    
    for thisCategorization_trial in categorization_trials:
        currentLoop = categorization_trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisCategorization_trial.rgb)
        if thisCategorization_trial != None:
            for paramName in thisCategorization_trial:
                globals()[paramName] = thisCategorization_trial[paramName]
        
        # set up handler to look after randomisation of conditions etc
        kitchen_a_categorization_trials = data.TrialHandler(nReps=kitchens_1, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(conditions_cat_kitchen_a),
            seed=None, name='kitchen_a_categorization_trials')
        thisExp.addLoop(kitchen_a_categorization_trials)  # add the loop to the experiment
        thisKitchen_a_categorization_trial = kitchen_a_categorization_trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisKitchen_a_categorization_trial.rgb)
        if thisKitchen_a_categorization_trial != None:
            for paramName in thisKitchen_a_categorization_trial:
                globals()[paramName] = thisKitchen_a_categorization_trial[paramName]
        
        for thisKitchen_a_categorization_trial in kitchen_a_categorization_trials:
            currentLoop = kitchen_a_categorization_trials
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisKitchen_a_categorization_trial.rgb)
            if thisKitchen_a_categorization_trial != None:
                for paramName in thisKitchen_a_categorization_trial:
                    globals()[paramName] = thisKitchen_a_categorization_trial[paramName]
            
            # --- Prepare to start Routine "kitchen_a" ---
            continueRoutine = True
            # update component parameters for each repeat
            # skip this Routine if its 'Skip if' condition is True
            continueRoutine = continueRoutine and not (kitchen_a_categorization_trials.thisN > 0)
            kitchen_a_resp.keys = []
            kitchen_a_resp.rt = []
            _kitchen_a_resp_allKeys = []
            kitchen_a_block_no.setText(block_total)
            # keep track of which components have finished
            kitchen_aComponents = [kitchen_a_text, kitchen_a_text_2, kitchen_a_resp, kitchen_a_block_no]
            for thisComponent in kitchen_aComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "kitchen_a" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *kitchen_a_text* updates
                
                # if kitchen_a_text is starting this frame...
                if kitchen_a_text.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_a_text.frameNStart = frameN  # exact frame index
                    kitchen_a_text.tStart = t  # local t and not account for scr refresh
                    kitchen_a_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_a_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_a_text.status = STARTED
                    kitchen_a_text.setAutoDraw(True)
                
                # if kitchen_a_text is active this frame...
                if kitchen_a_text.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_a_text_2* updates
                
                # if kitchen_a_text_2 is starting this frame...
                if kitchen_a_text_2.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_a_text_2.frameNStart = frameN  # exact frame index
                    kitchen_a_text_2.tStart = t  # local t and not account for scr refresh
                    kitchen_a_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_a_text_2, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_a_text_2.status = STARTED
                    kitchen_a_text_2.setAutoDraw(True)
                
                # if kitchen_a_text_2 is active this frame...
                if kitchen_a_text_2.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_a_resp* updates
                waitOnFlip = False
                
                # if kitchen_a_resp is starting this frame...
                if kitchen_a_resp.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_a_resp.frameNStart = frameN  # exact frame index
                    kitchen_a_resp.tStart = t  # local t and not account for scr refresh
                    kitchen_a_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_a_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_a_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(kitchen_a_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(kitchen_a_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if kitchen_a_resp.status == STARTED and not waitOnFlip:
                    theseKeys = kitchen_a_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _kitchen_a_resp_allKeys.extend(theseKeys)
                    if len(_kitchen_a_resp_allKeys):
                        kitchen_a_resp.keys = _kitchen_a_resp_allKeys[-1].name  # just the last key pressed
                        kitchen_a_resp.rt = _kitchen_a_resp_allKeys[-1].rt
                        kitchen_a_resp.duration = _kitchen_a_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # *kitchen_a_block_no* updates
                
                # if kitchen_a_block_no is starting this frame...
                if kitchen_a_block_no.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_a_block_no.frameNStart = frameN  # exact frame index
                    kitchen_a_block_no.tStart = t  # local t and not account for scr refresh
                    kitchen_a_block_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_a_block_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_a_block_no.status = STARTED
                    kitchen_a_block_no.setAutoDraw(True)
                
                # if kitchen_a_block_no is active this frame...
                if kitchen_a_block_no.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in kitchen_aComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "kitchen_a" ---
            for thisComponent in kitchen_aComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "kitchen_a" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "kitchen_random_isi" ---
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from random_isi_kitchen_code
            # Random Zeit ziehen für Fixationskreuzpräsentation
            import random
            time=random.uniform(0.9,1.9)
            # keep track of which components have finished
            kitchen_random_isiComponents = [random_isi_kitchen_fix, random_isi_kitchen_no, random_isi_kitchen_yes, random_isi_kitchen_question]
            for thisComponent in kitchen_random_isiComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "kitchen_random_isi" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *random_isi_kitchen_fix* updates
                
                # if random_isi_kitchen_fix is starting this frame...
                if random_isi_kitchen_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    random_isi_kitchen_fix.frameNStart = frameN  # exact frame index
                    random_isi_kitchen_fix.tStart = t  # local t and not account for scr refresh
                    random_isi_kitchen_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(random_isi_kitchen_fix, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    random_isi_kitchen_fix.status = STARTED
                    random_isi_kitchen_fix.setAutoDraw(True)
                
                # if random_isi_kitchen_fix is active this frame...
                if random_isi_kitchen_fix.status == STARTED:
                    # update params
                    pass
                
                # if random_isi_kitchen_fix is stopping this frame...
                if random_isi_kitchen_fix.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > random_isi_kitchen_fix.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        random_isi_kitchen_fix.tStop = t  # not accounting for scr refresh
                        random_isi_kitchen_fix.tStopRefresh = tThisFlipGlobal  # on global time
                        random_isi_kitchen_fix.frameNStop = frameN  # exact frame index
                        # update status
                        random_isi_kitchen_fix.status = FINISHED
                        random_isi_kitchen_fix.setAutoDraw(False)
                
                # *random_isi_kitchen_no* updates
                
                # if random_isi_kitchen_no is starting this frame...
                if random_isi_kitchen_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    random_isi_kitchen_no.frameNStart = frameN  # exact frame index
                    random_isi_kitchen_no.tStart = t  # local t and not account for scr refresh
                    random_isi_kitchen_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(random_isi_kitchen_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    random_isi_kitchen_no.status = STARTED
                    random_isi_kitchen_no.setAutoDraw(True)
                
                # if random_isi_kitchen_no is active this frame...
                if random_isi_kitchen_no.status == STARTED:
                    # update params
                    pass
                
                # if random_isi_kitchen_no is stopping this frame...
                if random_isi_kitchen_no.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > random_isi_kitchen_no.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        random_isi_kitchen_no.tStop = t  # not accounting for scr refresh
                        random_isi_kitchen_no.tStopRefresh = tThisFlipGlobal  # on global time
                        random_isi_kitchen_no.frameNStop = frameN  # exact frame index
                        # update status
                        random_isi_kitchen_no.status = FINISHED
                        random_isi_kitchen_no.setAutoDraw(False)
                
                # *random_isi_kitchen_yes* updates
                
                # if random_isi_kitchen_yes is starting this frame...
                if random_isi_kitchen_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    random_isi_kitchen_yes.frameNStart = frameN  # exact frame index
                    random_isi_kitchen_yes.tStart = t  # local t and not account for scr refresh
                    random_isi_kitchen_yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(random_isi_kitchen_yes, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    random_isi_kitchen_yes.status = STARTED
                    random_isi_kitchen_yes.setAutoDraw(True)
                
                # if random_isi_kitchen_yes is active this frame...
                if random_isi_kitchen_yes.status == STARTED:
                    # update params
                    pass
                
                # if random_isi_kitchen_yes is stopping this frame...
                if random_isi_kitchen_yes.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > random_isi_kitchen_yes.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        random_isi_kitchen_yes.tStop = t  # not accounting for scr refresh
                        random_isi_kitchen_yes.tStopRefresh = tThisFlipGlobal  # on global time
                        random_isi_kitchen_yes.frameNStop = frameN  # exact frame index
                        # update status
                        random_isi_kitchen_yes.status = FINISHED
                        random_isi_kitchen_yes.setAutoDraw(False)
                
                # *random_isi_kitchen_question* updates
                
                # if random_isi_kitchen_question is starting this frame...
                if random_isi_kitchen_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    random_isi_kitchen_question.frameNStart = frameN  # exact frame index
                    random_isi_kitchen_question.tStart = t  # local t and not account for scr refresh
                    random_isi_kitchen_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(random_isi_kitchen_question, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    random_isi_kitchen_question.status = STARTED
                    random_isi_kitchen_question.setAutoDraw(True)
                
                # if random_isi_kitchen_question is active this frame...
                if random_isi_kitchen_question.status == STARTED:
                    # update params
                    pass
                
                # if random_isi_kitchen_question is stopping this frame...
                if random_isi_kitchen_question.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > random_isi_kitchen_question.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        random_isi_kitchen_question.tStop = t  # not accounting for scr refresh
                        random_isi_kitchen_question.tStopRefresh = tThisFlipGlobal  # on global time
                        random_isi_kitchen_question.frameNStop = frameN  # exact frame index
                        # update status
                        random_isi_kitchen_question.status = FINISHED
                        random_isi_kitchen_question.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in kitchen_random_isiComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "kitchen_random_isi" ---
            for thisComponent in kitchen_random_isiComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "kitchen_random_isi" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "kitchen_picture" ---
            continueRoutine = True
            # update component parameters for each repeat
            kitchen_image.setImage(stimulus)
            kitchen_picture_resp.keys = []
            kitchen_picture_resp.rt = []
            _kitchen_picture_resp_allKeys = []
            # keep track of which components have finished
            kitchen_pictureComponents = [kitchen_fix, kitchen_image, kitchen_picture_no, kitchen_picture_yes, kitchen_picture_question, kitchen_picture_resp]
            for thisComponent in kitchen_pictureComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "kitchen_picture" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *kitchen_fix* updates
                
                # if kitchen_fix is starting this frame...
                if kitchen_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_fix.frameNStart = frameN  # exact frame index
                    kitchen_fix.tStart = t  # local t and not account for scr refresh
                    kitchen_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_fix, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'kitchen_fix.started')
                    # update status
                    kitchen_fix.status = STARTED
                    kitchen_fix.setAutoDraw(True)
                
                # if kitchen_fix is active this frame...
                if kitchen_fix.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_image* updates
                
                # if kitchen_image is starting this frame...
                if kitchen_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_image.frameNStart = frameN  # exact frame index
                    kitchen_image.tStart = t  # local t and not account for scr refresh
                    kitchen_image.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_image, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_image.status = STARTED
                    kitchen_image.setAutoDraw(True)
                
                # if kitchen_image is active this frame...
                if kitchen_image.status == STARTED:
                    # update params
                    pass
                
                # if kitchen_image is stopping this frame...
                if kitchen_image.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > kitchen_image.tStartRefresh + 0.75-frameTolerance:
                        # keep track of stop time/frame for later
                        kitchen_image.tStop = t  # not accounting for scr refresh
                        kitchen_image.tStopRefresh = tThisFlipGlobal  # on global time
                        kitchen_image.frameNStop = frameN  # exact frame index
                        # update status
                        kitchen_image.status = FINISHED
                        kitchen_image.setAutoDraw(False)
                
                # *kitchen_picture_no* updates
                
                # if kitchen_picture_no is starting this frame...
                if kitchen_picture_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_picture_no.frameNStart = frameN  # exact frame index
                    kitchen_picture_no.tStart = t  # local t and not account for scr refresh
                    kitchen_picture_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_picture_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_picture_no.status = STARTED
                    kitchen_picture_no.setAutoDraw(True)
                
                # if kitchen_picture_no is active this frame...
                if kitchen_picture_no.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_picture_yes* updates
                
                # if kitchen_picture_yes is starting this frame...
                if kitchen_picture_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_picture_yes.frameNStart = frameN  # exact frame index
                    kitchen_picture_yes.tStart = t  # local t and not account for scr refresh
                    kitchen_picture_yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_picture_yes, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_picture_yes.status = STARTED
                    kitchen_picture_yes.setAutoDraw(True)
                
                # if kitchen_picture_yes is active this frame...
                if kitchen_picture_yes.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_picture_question* updates
                
                # if kitchen_picture_question is starting this frame...
                if kitchen_picture_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_picture_question.frameNStart = frameN  # exact frame index
                    kitchen_picture_question.tStart = t  # local t and not account for scr refresh
                    kitchen_picture_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_picture_question, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_picture_question.status = STARTED
                    kitchen_picture_question.setAutoDraw(True)
                
                # if kitchen_picture_question is active this frame...
                if kitchen_picture_question.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_picture_resp* updates
                waitOnFlip = False
                
                # if kitchen_picture_resp is starting this frame...
                if kitchen_picture_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_picture_resp.frameNStart = frameN  # exact frame index
                    kitchen_picture_resp.tStart = t  # local t and not account for scr refresh
                    kitchen_picture_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_picture_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_picture_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(kitchen_picture_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(kitchen_picture_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if kitchen_picture_resp.status == STARTED and not waitOnFlip:
                    theseKeys = kitchen_picture_resp.getKeys(keyList=['j', 'f'], ignoreKeys=["escape"], waitRelease=False)
                    _kitchen_picture_resp_allKeys.extend(theseKeys)
                    if len(_kitchen_picture_resp_allKeys):
                        kitchen_picture_resp.keys = _kitchen_picture_resp_allKeys[-1].name  # just the last key pressed
                        kitchen_picture_resp.rt = _kitchen_picture_resp_allKeys[-1].rt
                        kitchen_picture_resp.duration = _kitchen_picture_resp_allKeys[-1].duration
                        # was this correct?
                        if (kitchen_picture_resp.keys == str(correct_answer)) or (kitchen_picture_resp.keys == correct_answer):
                            kitchen_picture_resp.corr = 1
                        else:
                            kitchen_picture_resp.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in kitchen_pictureComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "kitchen_picture" ---
            for thisComponent in kitchen_pictureComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if kitchen_picture_resp.keys in ['', [], None]:  # No response was made
                kitchen_picture_resp.keys = None
                # was no response the correct answer?!
                if str(correct_answer).lower() == 'none':
                   kitchen_picture_resp.corr = 1;  # correct non-response
                else:
                   kitchen_picture_resp.corr = 0;  # failed to respond (incorrectly)
            # store data for kitchen_a_categorization_trials (TrialHandler)
            kitchen_a_categorization_trials.addData('kitchen_picture_resp.keys',kitchen_picture_resp.keys)
            kitchen_a_categorization_trials.addData('kitchen_picture_resp.corr', kitchen_picture_resp.corr)
            if kitchen_picture_resp.keys != None:  # we had a response
                kitchen_a_categorization_trials.addData('kitchen_picture_resp.rt', kitchen_picture_resp.rt)
                kitchen_a_categorization_trials.addData('kitchen_picture_resp.duration', kitchen_picture_resp.duration)
            # the Routine "kitchen_picture" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed kitchens_1 repeats of 'kitchen_a_categorization_trials'
        
        
        # set up handler to look after randomisation of conditions etc
        kitchen_a_memotest = data.TrialHandler(nReps=kitchens_1, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(conditions_memo_kitchen_a),
            seed=None, name='kitchen_a_memotest')
        thisExp.addLoop(kitchen_a_memotest)  # add the loop to the experiment
        thisKitchen_a_memotest = kitchen_a_memotest.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisKitchen_a_memotest.rgb)
        if thisKitchen_a_memotest != None:
            for paramName in thisKitchen_a_memotest:
                globals()[paramName] = thisKitchen_a_memotest[paramName]
        
        for thisKitchen_a_memotest in kitchen_a_memotest:
            currentLoop = kitchen_a_memotest
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisKitchen_a_memotest.rgb)
            if thisKitchen_a_memotest != None:
                for paramName in thisKitchen_a_memotest:
                    globals()[paramName] = thisKitchen_a_memotest[paramName]
            
            # --- Prepare to start Routine "kitchen_a_memo_instr" ---
            continueRoutine = True
            # update component parameters for each repeat
            # skip this Routine if its 'Skip if' condition is True
            continueRoutine = continueRoutine and not (kitchen_a_memotest.thisN > 0)
            kitchen_a_memo_instr_resp.keys = []
            kitchen_a_memo_instr_resp.rt = []
            _kitchen_a_memo_instr_resp_allKeys = []
            # keep track of which components have finished
            kitchen_a_memo_instrComponents = [kitchen_a_memo_instr_text, kitchen_a_memo_instr_resp]
            for thisComponent in kitchen_a_memo_instrComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "kitchen_a_memo_instr" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *kitchen_a_memo_instr_text* updates
                
                # if kitchen_a_memo_instr_text is starting this frame...
                if kitchen_a_memo_instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_a_memo_instr_text.frameNStart = frameN  # exact frame index
                    kitchen_a_memo_instr_text.tStart = t  # local t and not account for scr refresh
                    kitchen_a_memo_instr_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_a_memo_instr_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_a_memo_instr_text.status = STARTED
                    kitchen_a_memo_instr_text.setAutoDraw(True)
                
                # if kitchen_a_memo_instr_text is active this frame...
                if kitchen_a_memo_instr_text.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_a_memo_instr_resp* updates
                waitOnFlip = False
                
                # if kitchen_a_memo_instr_resp is starting this frame...
                if kitchen_a_memo_instr_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_a_memo_instr_resp.frameNStart = frameN  # exact frame index
                    kitchen_a_memo_instr_resp.tStart = t  # local t and not account for scr refresh
                    kitchen_a_memo_instr_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_a_memo_instr_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_a_memo_instr_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(kitchen_a_memo_instr_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(kitchen_a_memo_instr_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if kitchen_a_memo_instr_resp.status == STARTED and not waitOnFlip:
                    theseKeys = kitchen_a_memo_instr_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _kitchen_a_memo_instr_resp_allKeys.extend(theseKeys)
                    if len(_kitchen_a_memo_instr_resp_allKeys):
                        kitchen_a_memo_instr_resp.keys = _kitchen_a_memo_instr_resp_allKeys[-1].name  # just the last key pressed
                        kitchen_a_memo_instr_resp.rt = _kitchen_a_memo_instr_resp_allKeys[-1].rt
                        kitchen_a_memo_instr_resp.duration = _kitchen_a_memo_instr_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in kitchen_a_memo_instrComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "kitchen_a_memo_instr" ---
            for thisComponent in kitchen_a_memo_instrComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "kitchen_a_memo_instr" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "memo_fix_isi" ---
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from random_isi_code_memo
            # Random Zeit ziehen für Fixationskreuzpräsentation
            import random
            time=random.uniform(0.2,1)
            # keep track of which components have finished
            memo_fix_isiComponents = [memo_fix_pic]
            for thisComponent in memo_fix_isiComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "memo_fix_isi" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *memo_fix_pic* updates
                
                # if memo_fix_pic is starting this frame...
                if memo_fix_pic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memo_fix_pic.frameNStart = frameN  # exact frame index
                    memo_fix_pic.tStart = t  # local t and not account for scr refresh
                    memo_fix_pic.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memo_fix_pic, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memo_fix_pic.status = STARTED
                    memo_fix_pic.setAutoDraw(True)
                
                # if memo_fix_pic is active this frame...
                if memo_fix_pic.status == STARTED:
                    # update params
                    pass
                
                # if memo_fix_pic is stopping this frame...
                if memo_fix_pic.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > memo_fix_pic.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        memo_fix_pic.tStop = t  # not accounting for scr refresh
                        memo_fix_pic.tStopRefresh = tThisFlipGlobal  # on global time
                        memo_fix_pic.frameNStop = frameN  # exact frame index
                        # update status
                        memo_fix_pic.status = FINISHED
                        memo_fix_pic.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in memo_fix_isiComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "memo_fix_isi" ---
            for thisComponent in memo_fix_isiComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "memo_fix_isi" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "memotest_task" ---
            continueRoutine = True
            # update component parameters for each repeat
            memotest_task_stim.setImage(stimulus)
            memotest_task_slider.reset()
            memotest_task_slider_key_resp.keys = []
            memotest_task_slider_key_resp.rt = []
            _memotest_task_slider_key_resp_allKeys = []
            # keep track of which components have finished
            memotest_taskComponents = [memotest_task_stim, memotest_task_slider, memotest_task_slider_key_resp]
            for thisComponent in memotest_taskComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "memotest_task" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *memotest_task_stim* updates
                
                # if memotest_task_stim is starting this frame...
                if memotest_task_stim.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_stim.frameNStart = frameN  # exact frame index
                    memotest_task_stim.tStart = t  # local t and not account for scr refresh
                    memotest_task_stim.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_stim, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_stim.status = STARTED
                    memotest_task_stim.setAutoDraw(True)
                
                # if memotest_task_stim is active this frame...
                if memotest_task_stim.status == STARTED:
                    # update params
                    pass
                
                # *memotest_task_slider* updates
                
                # if memotest_task_slider is starting this frame...
                if memotest_task_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_slider.frameNStart = frameN  # exact frame index
                    memotest_task_slider.tStart = t  # local t and not account for scr refresh
                    memotest_task_slider.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_slider, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_slider.status = STARTED
                    memotest_task_slider.setAutoDraw(True)
                
                # if memotest_task_slider is active this frame...
                if memotest_task_slider.status == STARTED:
                    # update params
                    pass
                
                # *memotest_task_slider_key_resp* updates
                waitOnFlip = False
                
                # if memotest_task_slider_key_resp is starting this frame...
                if memotest_task_slider_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_slider_key_resp.frameNStart = frameN  # exact frame index
                    memotest_task_slider_key_resp.tStart = t  # local t and not account for scr refresh
                    memotest_task_slider_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_slider_key_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_slider_key_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(memotest_task_slider_key_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(memotest_task_slider_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if memotest_task_slider_key_resp.status == STARTED and not waitOnFlip:
                    theseKeys = memotest_task_slider_key_resp.getKeys(keyList=['d', 'f', 'j', 'k'], ignoreKeys=["escape"], waitRelease=False)
                    _memotest_task_slider_key_resp_allKeys.extend(theseKeys)
                    if len(_memotest_task_slider_key_resp_allKeys):
                        memotest_task_slider_key_resp.keys = _memotest_task_slider_key_resp_allKeys[0].name  # just the first key pressed
                        memotest_task_slider_key_resp.rt = _memotest_task_slider_key_resp_allKeys[0].rt
                        memotest_task_slider_key_resp.duration = _memotest_task_slider_key_resp_allKeys[0].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in memotest_taskComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "memotest_task" ---
            for thisComponent in memotest_taskComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if memotest_task_slider_key_resp.keys in ['', [], None]:  # No response was made
                memotest_task_slider_key_resp.keys = None
            kitchen_a_memotest.addData('memotest_task_slider_key_resp.keys',memotest_task_slider_key_resp.keys)
            if memotest_task_slider_key_resp.keys != None:  # we had a response
                kitchen_a_memotest.addData('memotest_task_slider_key_resp.rt', memotest_task_slider_key_resp.rt)
                kitchen_a_memotest.addData('memotest_task_slider_key_resp.duration', memotest_task_slider_key_resp.duration)
            # the Routine "memotest_task" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed kitchens_1 repeats of 'kitchen_a_memotest'
        
        
        # set up handler to look after randomisation of conditions etc
        kitchen_b_categorization_trials = data.TrialHandler(nReps=kitchens_2, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(conditions_cat_kitchen_b),
            seed=None, name='kitchen_b_categorization_trials')
        thisExp.addLoop(kitchen_b_categorization_trials)  # add the loop to the experiment
        thisKitchen_b_categorization_trial = kitchen_b_categorization_trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisKitchen_b_categorization_trial.rgb)
        if thisKitchen_b_categorization_trial != None:
            for paramName in thisKitchen_b_categorization_trial:
                globals()[paramName] = thisKitchen_b_categorization_trial[paramName]
        
        for thisKitchen_b_categorization_trial in kitchen_b_categorization_trials:
            currentLoop = kitchen_b_categorization_trials
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisKitchen_b_categorization_trial.rgb)
            if thisKitchen_b_categorization_trial != None:
                for paramName in thisKitchen_b_categorization_trial:
                    globals()[paramName] = thisKitchen_b_categorization_trial[paramName]
            
            # --- Prepare to start Routine "kitchen_b" ---
            continueRoutine = True
            # update component parameters for each repeat
            # skip this Routine if its 'Skip if' condition is True
            continueRoutine = continueRoutine and not (kitchen_b_categorization_trials.thisN > 0)
            kitchen_b_resp.keys = []
            kitchen_b_resp.rt = []
            _kitchen_b_resp_allKeys = []
            kitchen_b_block_no.setText(block_total)
            # keep track of which components have finished
            kitchen_bComponents = [kitchen_b_text, kitchen_b_text_2, kitchen_b_resp, kitchen_b_block_no]
            for thisComponent in kitchen_bComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "kitchen_b" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *kitchen_b_text* updates
                
                # if kitchen_b_text is starting this frame...
                if kitchen_b_text.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_b_text.frameNStart = frameN  # exact frame index
                    kitchen_b_text.tStart = t  # local t and not account for scr refresh
                    kitchen_b_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_b_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_b_text.status = STARTED
                    kitchen_b_text.setAutoDraw(True)
                
                # if kitchen_b_text is active this frame...
                if kitchen_b_text.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_b_text_2* updates
                
                # if kitchen_b_text_2 is starting this frame...
                if kitchen_b_text_2.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_b_text_2.frameNStart = frameN  # exact frame index
                    kitchen_b_text_2.tStart = t  # local t and not account for scr refresh
                    kitchen_b_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_b_text_2, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_b_text_2.status = STARTED
                    kitchen_b_text_2.setAutoDraw(True)
                
                # if kitchen_b_text_2 is active this frame...
                if kitchen_b_text_2.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_b_resp* updates
                waitOnFlip = False
                
                # if kitchen_b_resp is starting this frame...
                if kitchen_b_resp.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_b_resp.frameNStart = frameN  # exact frame index
                    kitchen_b_resp.tStart = t  # local t and not account for scr refresh
                    kitchen_b_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_b_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_b_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(kitchen_b_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(kitchen_b_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if kitchen_b_resp.status == STARTED and not waitOnFlip:
                    theseKeys = kitchen_b_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _kitchen_b_resp_allKeys.extend(theseKeys)
                    if len(_kitchen_b_resp_allKeys):
                        kitchen_b_resp.keys = _kitchen_b_resp_allKeys[-1].name  # just the last key pressed
                        kitchen_b_resp.rt = _kitchen_b_resp_allKeys[-1].rt
                        kitchen_b_resp.duration = _kitchen_b_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # *kitchen_b_block_no* updates
                
                # if kitchen_b_block_no is starting this frame...
                if kitchen_b_block_no.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_b_block_no.frameNStart = frameN  # exact frame index
                    kitchen_b_block_no.tStart = t  # local t and not account for scr refresh
                    kitchen_b_block_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_b_block_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_b_block_no.status = STARTED
                    kitchen_b_block_no.setAutoDraw(True)
                
                # if kitchen_b_block_no is active this frame...
                if kitchen_b_block_no.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in kitchen_bComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "kitchen_b" ---
            for thisComponent in kitchen_bComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "kitchen_b" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "kitchen_random_isi" ---
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from random_isi_kitchen_code
            # Random Zeit ziehen für Fixationskreuzpräsentation
            import random
            time=random.uniform(0.9,1.9)
            # keep track of which components have finished
            kitchen_random_isiComponents = [random_isi_kitchen_fix, random_isi_kitchen_no, random_isi_kitchen_yes, random_isi_kitchen_question]
            for thisComponent in kitchen_random_isiComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "kitchen_random_isi" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *random_isi_kitchen_fix* updates
                
                # if random_isi_kitchen_fix is starting this frame...
                if random_isi_kitchen_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    random_isi_kitchen_fix.frameNStart = frameN  # exact frame index
                    random_isi_kitchen_fix.tStart = t  # local t and not account for scr refresh
                    random_isi_kitchen_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(random_isi_kitchen_fix, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    random_isi_kitchen_fix.status = STARTED
                    random_isi_kitchen_fix.setAutoDraw(True)
                
                # if random_isi_kitchen_fix is active this frame...
                if random_isi_kitchen_fix.status == STARTED:
                    # update params
                    pass
                
                # if random_isi_kitchen_fix is stopping this frame...
                if random_isi_kitchen_fix.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > random_isi_kitchen_fix.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        random_isi_kitchen_fix.tStop = t  # not accounting for scr refresh
                        random_isi_kitchen_fix.tStopRefresh = tThisFlipGlobal  # on global time
                        random_isi_kitchen_fix.frameNStop = frameN  # exact frame index
                        # update status
                        random_isi_kitchen_fix.status = FINISHED
                        random_isi_kitchen_fix.setAutoDraw(False)
                
                # *random_isi_kitchen_no* updates
                
                # if random_isi_kitchen_no is starting this frame...
                if random_isi_kitchen_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    random_isi_kitchen_no.frameNStart = frameN  # exact frame index
                    random_isi_kitchen_no.tStart = t  # local t and not account for scr refresh
                    random_isi_kitchen_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(random_isi_kitchen_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    random_isi_kitchen_no.status = STARTED
                    random_isi_kitchen_no.setAutoDraw(True)
                
                # if random_isi_kitchen_no is active this frame...
                if random_isi_kitchen_no.status == STARTED:
                    # update params
                    pass
                
                # if random_isi_kitchen_no is stopping this frame...
                if random_isi_kitchen_no.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > random_isi_kitchen_no.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        random_isi_kitchen_no.tStop = t  # not accounting for scr refresh
                        random_isi_kitchen_no.tStopRefresh = tThisFlipGlobal  # on global time
                        random_isi_kitchen_no.frameNStop = frameN  # exact frame index
                        # update status
                        random_isi_kitchen_no.status = FINISHED
                        random_isi_kitchen_no.setAutoDraw(False)
                
                # *random_isi_kitchen_yes* updates
                
                # if random_isi_kitchen_yes is starting this frame...
                if random_isi_kitchen_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    random_isi_kitchen_yes.frameNStart = frameN  # exact frame index
                    random_isi_kitchen_yes.tStart = t  # local t and not account for scr refresh
                    random_isi_kitchen_yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(random_isi_kitchen_yes, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    random_isi_kitchen_yes.status = STARTED
                    random_isi_kitchen_yes.setAutoDraw(True)
                
                # if random_isi_kitchen_yes is active this frame...
                if random_isi_kitchen_yes.status == STARTED:
                    # update params
                    pass
                
                # if random_isi_kitchen_yes is stopping this frame...
                if random_isi_kitchen_yes.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > random_isi_kitchen_yes.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        random_isi_kitchen_yes.tStop = t  # not accounting for scr refresh
                        random_isi_kitchen_yes.tStopRefresh = tThisFlipGlobal  # on global time
                        random_isi_kitchen_yes.frameNStop = frameN  # exact frame index
                        # update status
                        random_isi_kitchen_yes.status = FINISHED
                        random_isi_kitchen_yes.setAutoDraw(False)
                
                # *random_isi_kitchen_question* updates
                
                # if random_isi_kitchen_question is starting this frame...
                if random_isi_kitchen_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    random_isi_kitchen_question.frameNStart = frameN  # exact frame index
                    random_isi_kitchen_question.tStart = t  # local t and not account for scr refresh
                    random_isi_kitchen_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(random_isi_kitchen_question, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    random_isi_kitchen_question.status = STARTED
                    random_isi_kitchen_question.setAutoDraw(True)
                
                # if random_isi_kitchen_question is active this frame...
                if random_isi_kitchen_question.status == STARTED:
                    # update params
                    pass
                
                # if random_isi_kitchen_question is stopping this frame...
                if random_isi_kitchen_question.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > random_isi_kitchen_question.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        random_isi_kitchen_question.tStop = t  # not accounting for scr refresh
                        random_isi_kitchen_question.tStopRefresh = tThisFlipGlobal  # on global time
                        random_isi_kitchen_question.frameNStop = frameN  # exact frame index
                        # update status
                        random_isi_kitchen_question.status = FINISHED
                        random_isi_kitchen_question.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in kitchen_random_isiComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "kitchen_random_isi" ---
            for thisComponent in kitchen_random_isiComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "kitchen_random_isi" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "kitchen_picture" ---
            continueRoutine = True
            # update component parameters for each repeat
            kitchen_image.setImage(stimulus)
            kitchen_picture_resp.keys = []
            kitchen_picture_resp.rt = []
            _kitchen_picture_resp_allKeys = []
            # keep track of which components have finished
            kitchen_pictureComponents = [kitchen_fix, kitchen_image, kitchen_picture_no, kitchen_picture_yes, kitchen_picture_question, kitchen_picture_resp]
            for thisComponent in kitchen_pictureComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "kitchen_picture" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *kitchen_fix* updates
                
                # if kitchen_fix is starting this frame...
                if kitchen_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_fix.frameNStart = frameN  # exact frame index
                    kitchen_fix.tStart = t  # local t and not account for scr refresh
                    kitchen_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_fix, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'kitchen_fix.started')
                    # update status
                    kitchen_fix.status = STARTED
                    kitchen_fix.setAutoDraw(True)
                
                # if kitchen_fix is active this frame...
                if kitchen_fix.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_image* updates
                
                # if kitchen_image is starting this frame...
                if kitchen_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_image.frameNStart = frameN  # exact frame index
                    kitchen_image.tStart = t  # local t and not account for scr refresh
                    kitchen_image.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_image, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_image.status = STARTED
                    kitchen_image.setAutoDraw(True)
                
                # if kitchen_image is active this frame...
                if kitchen_image.status == STARTED:
                    # update params
                    pass
                
                # if kitchen_image is stopping this frame...
                if kitchen_image.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > kitchen_image.tStartRefresh + 0.75-frameTolerance:
                        # keep track of stop time/frame for later
                        kitchen_image.tStop = t  # not accounting for scr refresh
                        kitchen_image.tStopRefresh = tThisFlipGlobal  # on global time
                        kitchen_image.frameNStop = frameN  # exact frame index
                        # update status
                        kitchen_image.status = FINISHED
                        kitchen_image.setAutoDraw(False)
                
                # *kitchen_picture_no* updates
                
                # if kitchen_picture_no is starting this frame...
                if kitchen_picture_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_picture_no.frameNStart = frameN  # exact frame index
                    kitchen_picture_no.tStart = t  # local t and not account for scr refresh
                    kitchen_picture_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_picture_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_picture_no.status = STARTED
                    kitchen_picture_no.setAutoDraw(True)
                
                # if kitchen_picture_no is active this frame...
                if kitchen_picture_no.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_picture_yes* updates
                
                # if kitchen_picture_yes is starting this frame...
                if kitchen_picture_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_picture_yes.frameNStart = frameN  # exact frame index
                    kitchen_picture_yes.tStart = t  # local t and not account for scr refresh
                    kitchen_picture_yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_picture_yes, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_picture_yes.status = STARTED
                    kitchen_picture_yes.setAutoDraw(True)
                
                # if kitchen_picture_yes is active this frame...
                if kitchen_picture_yes.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_picture_question* updates
                
                # if kitchen_picture_question is starting this frame...
                if kitchen_picture_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_picture_question.frameNStart = frameN  # exact frame index
                    kitchen_picture_question.tStart = t  # local t and not account for scr refresh
                    kitchen_picture_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_picture_question, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_picture_question.status = STARTED
                    kitchen_picture_question.setAutoDraw(True)
                
                # if kitchen_picture_question is active this frame...
                if kitchen_picture_question.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_picture_resp* updates
                waitOnFlip = False
                
                # if kitchen_picture_resp is starting this frame...
                if kitchen_picture_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_picture_resp.frameNStart = frameN  # exact frame index
                    kitchen_picture_resp.tStart = t  # local t and not account for scr refresh
                    kitchen_picture_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_picture_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_picture_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(kitchen_picture_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(kitchen_picture_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if kitchen_picture_resp.status == STARTED and not waitOnFlip:
                    theseKeys = kitchen_picture_resp.getKeys(keyList=['j', 'f'], ignoreKeys=["escape"], waitRelease=False)
                    _kitchen_picture_resp_allKeys.extend(theseKeys)
                    if len(_kitchen_picture_resp_allKeys):
                        kitchen_picture_resp.keys = _kitchen_picture_resp_allKeys[-1].name  # just the last key pressed
                        kitchen_picture_resp.rt = _kitchen_picture_resp_allKeys[-1].rt
                        kitchen_picture_resp.duration = _kitchen_picture_resp_allKeys[-1].duration
                        # was this correct?
                        if (kitchen_picture_resp.keys == str(correct_answer)) or (kitchen_picture_resp.keys == correct_answer):
                            kitchen_picture_resp.corr = 1
                        else:
                            kitchen_picture_resp.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in kitchen_pictureComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "kitchen_picture" ---
            for thisComponent in kitchen_pictureComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if kitchen_picture_resp.keys in ['', [], None]:  # No response was made
                kitchen_picture_resp.keys = None
                # was no response the correct answer?!
                if str(correct_answer).lower() == 'none':
                   kitchen_picture_resp.corr = 1;  # correct non-response
                else:
                   kitchen_picture_resp.corr = 0;  # failed to respond (incorrectly)
            # store data for kitchen_b_categorization_trials (TrialHandler)
            kitchen_b_categorization_trials.addData('kitchen_picture_resp.keys',kitchen_picture_resp.keys)
            kitchen_b_categorization_trials.addData('kitchen_picture_resp.corr', kitchen_picture_resp.corr)
            if kitchen_picture_resp.keys != None:  # we had a response
                kitchen_b_categorization_trials.addData('kitchen_picture_resp.rt', kitchen_picture_resp.rt)
                kitchen_b_categorization_trials.addData('kitchen_picture_resp.duration', kitchen_picture_resp.duration)
            # the Routine "kitchen_picture" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed kitchens_2 repeats of 'kitchen_b_categorization_trials'
        
        
        # set up handler to look after randomisation of conditions etc
        kitchen_b_memotest = data.TrialHandler(nReps=kitchens_2, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(conditions_memo_kitchen_b),
            seed=None, name='kitchen_b_memotest')
        thisExp.addLoop(kitchen_b_memotest)  # add the loop to the experiment
        thisKitchen_b_memotest = kitchen_b_memotest.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisKitchen_b_memotest.rgb)
        if thisKitchen_b_memotest != None:
            for paramName in thisKitchen_b_memotest:
                globals()[paramName] = thisKitchen_b_memotest[paramName]
        
        for thisKitchen_b_memotest in kitchen_b_memotest:
            currentLoop = kitchen_b_memotest
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisKitchen_b_memotest.rgb)
            if thisKitchen_b_memotest != None:
                for paramName in thisKitchen_b_memotest:
                    globals()[paramName] = thisKitchen_b_memotest[paramName]
            
            # --- Prepare to start Routine "kitchen_b_memo_instr" ---
            continueRoutine = True
            # update component parameters for each repeat
            # skip this Routine if its 'Skip if' condition is True
            continueRoutine = continueRoutine and not (kitchen_b_memotest.thisN > 0)
            kitchen_b_memo_instr_resp.keys = []
            kitchen_b_memo_instr_resp.rt = []
            _kitchen_b_memo_instr_resp_allKeys = []
            # keep track of which components have finished
            kitchen_b_memo_instrComponents = [kitchen_b_memo_instr_text, kitchen_b_memo_instr_resp]
            for thisComponent in kitchen_b_memo_instrComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "kitchen_b_memo_instr" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *kitchen_b_memo_instr_text* updates
                
                # if kitchen_b_memo_instr_text is starting this frame...
                if kitchen_b_memo_instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_b_memo_instr_text.frameNStart = frameN  # exact frame index
                    kitchen_b_memo_instr_text.tStart = t  # local t and not account for scr refresh
                    kitchen_b_memo_instr_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_b_memo_instr_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_b_memo_instr_text.status = STARTED
                    kitchen_b_memo_instr_text.setAutoDraw(True)
                
                # if kitchen_b_memo_instr_text is active this frame...
                if kitchen_b_memo_instr_text.status == STARTED:
                    # update params
                    pass
                
                # *kitchen_b_memo_instr_resp* updates
                waitOnFlip = False
                
                # if kitchen_b_memo_instr_resp is starting this frame...
                if kitchen_b_memo_instr_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    kitchen_b_memo_instr_resp.frameNStart = frameN  # exact frame index
                    kitchen_b_memo_instr_resp.tStart = t  # local t and not account for scr refresh
                    kitchen_b_memo_instr_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(kitchen_b_memo_instr_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    kitchen_b_memo_instr_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(kitchen_b_memo_instr_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(kitchen_b_memo_instr_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if kitchen_b_memo_instr_resp.status == STARTED and not waitOnFlip:
                    theseKeys = kitchen_b_memo_instr_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _kitchen_b_memo_instr_resp_allKeys.extend(theseKeys)
                    if len(_kitchen_b_memo_instr_resp_allKeys):
                        kitchen_b_memo_instr_resp.keys = _kitchen_b_memo_instr_resp_allKeys[-1].name  # just the last key pressed
                        kitchen_b_memo_instr_resp.rt = _kitchen_b_memo_instr_resp_allKeys[-1].rt
                        kitchen_b_memo_instr_resp.duration = _kitchen_b_memo_instr_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in kitchen_b_memo_instrComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "kitchen_b_memo_instr" ---
            for thisComponent in kitchen_b_memo_instrComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "kitchen_b_memo_instr" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "memo_fix_isi" ---
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from random_isi_code_memo
            # Random Zeit ziehen für Fixationskreuzpräsentation
            import random
            time=random.uniform(0.2,1)
            # keep track of which components have finished
            memo_fix_isiComponents = [memo_fix_pic]
            for thisComponent in memo_fix_isiComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "memo_fix_isi" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *memo_fix_pic* updates
                
                # if memo_fix_pic is starting this frame...
                if memo_fix_pic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memo_fix_pic.frameNStart = frameN  # exact frame index
                    memo_fix_pic.tStart = t  # local t and not account for scr refresh
                    memo_fix_pic.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memo_fix_pic, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memo_fix_pic.status = STARTED
                    memo_fix_pic.setAutoDraw(True)
                
                # if memo_fix_pic is active this frame...
                if memo_fix_pic.status == STARTED:
                    # update params
                    pass
                
                # if memo_fix_pic is stopping this frame...
                if memo_fix_pic.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > memo_fix_pic.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        memo_fix_pic.tStop = t  # not accounting for scr refresh
                        memo_fix_pic.tStopRefresh = tThisFlipGlobal  # on global time
                        memo_fix_pic.frameNStop = frameN  # exact frame index
                        # update status
                        memo_fix_pic.status = FINISHED
                        memo_fix_pic.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in memo_fix_isiComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "memo_fix_isi" ---
            for thisComponent in memo_fix_isiComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "memo_fix_isi" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "memotest_task" ---
            continueRoutine = True
            # update component parameters for each repeat
            memotest_task_stim.setImage(stimulus)
            memotest_task_slider.reset()
            memotest_task_slider_key_resp.keys = []
            memotest_task_slider_key_resp.rt = []
            _memotest_task_slider_key_resp_allKeys = []
            # keep track of which components have finished
            memotest_taskComponents = [memotest_task_stim, memotest_task_slider, memotest_task_slider_key_resp]
            for thisComponent in memotest_taskComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "memotest_task" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *memotest_task_stim* updates
                
                # if memotest_task_stim is starting this frame...
                if memotest_task_stim.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_stim.frameNStart = frameN  # exact frame index
                    memotest_task_stim.tStart = t  # local t and not account for scr refresh
                    memotest_task_stim.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_stim, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_stim.status = STARTED
                    memotest_task_stim.setAutoDraw(True)
                
                # if memotest_task_stim is active this frame...
                if memotest_task_stim.status == STARTED:
                    # update params
                    pass
                
                # *memotest_task_slider* updates
                
                # if memotest_task_slider is starting this frame...
                if memotest_task_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_slider.frameNStart = frameN  # exact frame index
                    memotest_task_slider.tStart = t  # local t and not account for scr refresh
                    memotest_task_slider.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_slider, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_slider.status = STARTED
                    memotest_task_slider.setAutoDraw(True)
                
                # if memotest_task_slider is active this frame...
                if memotest_task_slider.status == STARTED:
                    # update params
                    pass
                
                # *memotest_task_slider_key_resp* updates
                waitOnFlip = False
                
                # if memotest_task_slider_key_resp is starting this frame...
                if memotest_task_slider_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_slider_key_resp.frameNStart = frameN  # exact frame index
                    memotest_task_slider_key_resp.tStart = t  # local t and not account for scr refresh
                    memotest_task_slider_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_slider_key_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_slider_key_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(memotest_task_slider_key_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(memotest_task_slider_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if memotest_task_slider_key_resp.status == STARTED and not waitOnFlip:
                    theseKeys = memotest_task_slider_key_resp.getKeys(keyList=['d', 'f', 'j', 'k'], ignoreKeys=["escape"], waitRelease=False)
                    _memotest_task_slider_key_resp_allKeys.extend(theseKeys)
                    if len(_memotest_task_slider_key_resp_allKeys):
                        memotest_task_slider_key_resp.keys = _memotest_task_slider_key_resp_allKeys[0].name  # just the first key pressed
                        memotest_task_slider_key_resp.rt = _memotest_task_slider_key_resp_allKeys[0].rt
                        memotest_task_slider_key_resp.duration = _memotest_task_slider_key_resp_allKeys[0].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in memotest_taskComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "memotest_task" ---
            for thisComponent in memotest_taskComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if memotest_task_slider_key_resp.keys in ['', [], None]:  # No response was made
                memotest_task_slider_key_resp.keys = None
            kitchen_b_memotest.addData('memotest_task_slider_key_resp.keys',memotest_task_slider_key_resp.keys)
            if memotest_task_slider_key_resp.keys != None:  # we had a response
                kitchen_b_memotest.addData('memotest_task_slider_key_resp.rt', memotest_task_slider_key_resp.rt)
                kitchen_b_memotest.addData('memotest_task_slider_key_resp.duration', memotest_task_slider_key_resp.duration)
            # the Routine "memotest_task" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed kitchens_2 repeats of 'kitchen_b_memotest'
        
        
        # set up handler to look after randomisation of conditions etc
        living_a_categorization_trials = data.TrialHandler(nReps=living_rooms_1, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(conditions_cat_living_a),
            seed=None, name='living_a_categorization_trials')
        thisExp.addLoop(living_a_categorization_trials)  # add the loop to the experiment
        thisLiving_a_categorization_trial = living_a_categorization_trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisLiving_a_categorization_trial.rgb)
        if thisLiving_a_categorization_trial != None:
            for paramName in thisLiving_a_categorization_trial:
                globals()[paramName] = thisLiving_a_categorization_trial[paramName]
        
        for thisLiving_a_categorization_trial in living_a_categorization_trials:
            currentLoop = living_a_categorization_trials
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisLiving_a_categorization_trial.rgb)
            if thisLiving_a_categorization_trial != None:
                for paramName in thisLiving_a_categorization_trial:
                    globals()[paramName] = thisLiving_a_categorization_trial[paramName]
            
            # --- Prepare to start Routine "living_a" ---
            continueRoutine = True
            # update component parameters for each repeat
            # skip this Routine if its 'Skip if' condition is True
            continueRoutine = continueRoutine and not (living_a_categorization_trials.thisN > 0)
            living_a_resp.keys = []
            living_a_resp.rt = []
            _living_a_resp_allKeys = []
            living_a_block_no.setText(block_total)
            # keep track of which components have finished
            living_aComponents = [living_a_text, living_a_text_2, living_a_resp, living_a_block_no]
            for thisComponent in living_aComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "living_a" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *living_a_text* updates
                
                # if living_a_text is starting this frame...
                if living_a_text.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    living_a_text.frameNStart = frameN  # exact frame index
                    living_a_text.tStart = t  # local t and not account for scr refresh
                    living_a_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_a_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_a_text.status = STARTED
                    living_a_text.setAutoDraw(True)
                
                # if living_a_text is active this frame...
                if living_a_text.status == STARTED:
                    # update params
                    pass
                
                # *living_a_text_2* updates
                
                # if living_a_text_2 is starting this frame...
                if living_a_text_2.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    living_a_text_2.frameNStart = frameN  # exact frame index
                    living_a_text_2.tStart = t  # local t and not account for scr refresh
                    living_a_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_a_text_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'living_a_text_2.started')
                    # update status
                    living_a_text_2.status = STARTED
                    living_a_text_2.setAutoDraw(True)
                
                # if living_a_text_2 is active this frame...
                if living_a_text_2.status == STARTED:
                    # update params
                    pass
                
                # *living_a_resp* updates
                waitOnFlip = False
                
                # if living_a_resp is starting this frame...
                if living_a_resp.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    living_a_resp.frameNStart = frameN  # exact frame index
                    living_a_resp.tStart = t  # local t and not account for scr refresh
                    living_a_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_a_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_a_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(living_a_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(living_a_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if living_a_resp.status == STARTED and not waitOnFlip:
                    theseKeys = living_a_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _living_a_resp_allKeys.extend(theseKeys)
                    if len(_living_a_resp_allKeys):
                        living_a_resp.keys = _living_a_resp_allKeys[-1].name  # just the last key pressed
                        living_a_resp.rt = _living_a_resp_allKeys[-1].rt
                        living_a_resp.duration = _living_a_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # *living_a_block_no* updates
                
                # if living_a_block_no is starting this frame...
                if living_a_block_no.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    living_a_block_no.frameNStart = frameN  # exact frame index
                    living_a_block_no.tStart = t  # local t and not account for scr refresh
                    living_a_block_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_a_block_no, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'living_a_block_no.started')
                    # update status
                    living_a_block_no.status = STARTED
                    living_a_block_no.setAutoDraw(True)
                
                # if living_a_block_no is active this frame...
                if living_a_block_no.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in living_aComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "living_a" ---
            for thisComponent in living_aComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "living_a" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "living_random_isi" ---
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from living_random_isi_code
            # Random Zeit ziehen für Fixationskreuzpräsentation
            import random
            time=random.uniform(0.9,1.9)
            # keep track of which components have finished
            living_random_isiComponents = [living_random_isi_fix, living_random_isi_no, living_random_isi_yes, living_random_isi_question]
            for thisComponent in living_random_isiComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "living_random_isi" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *living_random_isi_fix* updates
                
                # if living_random_isi_fix is starting this frame...
                if living_random_isi_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_random_isi_fix.frameNStart = frameN  # exact frame index
                    living_random_isi_fix.tStart = t  # local t and not account for scr refresh
                    living_random_isi_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_random_isi_fix, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_random_isi_fix.status = STARTED
                    living_random_isi_fix.setAutoDraw(True)
                
                # if living_random_isi_fix is active this frame...
                if living_random_isi_fix.status == STARTED:
                    # update params
                    pass
                
                # if living_random_isi_fix is stopping this frame...
                if living_random_isi_fix.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > living_random_isi_fix.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        living_random_isi_fix.tStop = t  # not accounting for scr refresh
                        living_random_isi_fix.tStopRefresh = tThisFlipGlobal  # on global time
                        living_random_isi_fix.frameNStop = frameN  # exact frame index
                        # update status
                        living_random_isi_fix.status = FINISHED
                        living_random_isi_fix.setAutoDraw(False)
                
                # *living_random_isi_no* updates
                
                # if living_random_isi_no is starting this frame...
                if living_random_isi_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_random_isi_no.frameNStart = frameN  # exact frame index
                    living_random_isi_no.tStart = t  # local t and not account for scr refresh
                    living_random_isi_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_random_isi_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_random_isi_no.status = STARTED
                    living_random_isi_no.setAutoDraw(True)
                
                # if living_random_isi_no is active this frame...
                if living_random_isi_no.status == STARTED:
                    # update params
                    pass
                
                # if living_random_isi_no is stopping this frame...
                if living_random_isi_no.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > living_random_isi_no.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        living_random_isi_no.tStop = t  # not accounting for scr refresh
                        living_random_isi_no.tStopRefresh = tThisFlipGlobal  # on global time
                        living_random_isi_no.frameNStop = frameN  # exact frame index
                        # update status
                        living_random_isi_no.status = FINISHED
                        living_random_isi_no.setAutoDraw(False)
                
                # *living_random_isi_yes* updates
                
                # if living_random_isi_yes is starting this frame...
                if living_random_isi_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_random_isi_yes.frameNStart = frameN  # exact frame index
                    living_random_isi_yes.tStart = t  # local t and not account for scr refresh
                    living_random_isi_yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_random_isi_yes, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_random_isi_yes.status = STARTED
                    living_random_isi_yes.setAutoDraw(True)
                
                # if living_random_isi_yes is active this frame...
                if living_random_isi_yes.status == STARTED:
                    # update params
                    pass
                
                # if living_random_isi_yes is stopping this frame...
                if living_random_isi_yes.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > living_random_isi_yes.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        living_random_isi_yes.tStop = t  # not accounting for scr refresh
                        living_random_isi_yes.tStopRefresh = tThisFlipGlobal  # on global time
                        living_random_isi_yes.frameNStop = frameN  # exact frame index
                        # update status
                        living_random_isi_yes.status = FINISHED
                        living_random_isi_yes.setAutoDraw(False)
                
                # *living_random_isi_question* updates
                
                # if living_random_isi_question is starting this frame...
                if living_random_isi_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_random_isi_question.frameNStart = frameN  # exact frame index
                    living_random_isi_question.tStart = t  # local t and not account for scr refresh
                    living_random_isi_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_random_isi_question, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_random_isi_question.status = STARTED
                    living_random_isi_question.setAutoDraw(True)
                
                # if living_random_isi_question is active this frame...
                if living_random_isi_question.status == STARTED:
                    # update params
                    pass
                
                # if living_random_isi_question is stopping this frame...
                if living_random_isi_question.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > living_random_isi_question.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        living_random_isi_question.tStop = t  # not accounting for scr refresh
                        living_random_isi_question.tStopRefresh = tThisFlipGlobal  # on global time
                        living_random_isi_question.frameNStop = frameN  # exact frame index
                        # update status
                        living_random_isi_question.status = FINISHED
                        living_random_isi_question.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in living_random_isiComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "living_random_isi" ---
            for thisComponent in living_random_isiComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "living_random_isi" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "living_picture" ---
            continueRoutine = True
            # update component parameters for each repeat
            living_picture_image.setImage(stimulus)
            living_picture_resp.keys = []
            living_picture_resp.rt = []
            _living_picture_resp_allKeys = []
            # keep track of which components have finished
            living_pictureComponents = [living_picture_fix, living_picture_image, living_picture_no, living_picture_yes, living_picture_resp, living_picture_question]
            for thisComponent in living_pictureComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "living_picture" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *living_picture_fix* updates
                
                # if living_picture_fix is starting this frame...
                if living_picture_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_picture_fix.frameNStart = frameN  # exact frame index
                    living_picture_fix.tStart = t  # local t and not account for scr refresh
                    living_picture_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_picture_fix, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_picture_fix.status = STARTED
                    living_picture_fix.setAutoDraw(True)
                
                # if living_picture_fix is active this frame...
                if living_picture_fix.status == STARTED:
                    # update params
                    pass
                
                # *living_picture_image* updates
                
                # if living_picture_image is starting this frame...
                if living_picture_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_picture_image.frameNStart = frameN  # exact frame index
                    living_picture_image.tStart = t  # local t and not account for scr refresh
                    living_picture_image.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_picture_image, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'living_picture_image.started')
                    # update status
                    living_picture_image.status = STARTED
                    living_picture_image.setAutoDraw(True)
                
                # if living_picture_image is active this frame...
                if living_picture_image.status == STARTED:
                    # update params
                    pass
                
                # if living_picture_image is stopping this frame...
                if living_picture_image.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > living_picture_image.tStartRefresh + 0.75-frameTolerance:
                        # keep track of stop time/frame for later
                        living_picture_image.tStop = t  # not accounting for scr refresh
                        living_picture_image.tStopRefresh = tThisFlipGlobal  # on global time
                        living_picture_image.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'living_picture_image.stopped')
                        # update status
                        living_picture_image.status = FINISHED
                        living_picture_image.setAutoDraw(False)
                
                # *living_picture_no* updates
                
                # if living_picture_no is starting this frame...
                if living_picture_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_picture_no.frameNStart = frameN  # exact frame index
                    living_picture_no.tStart = t  # local t and not account for scr refresh
                    living_picture_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_picture_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_picture_no.status = STARTED
                    living_picture_no.setAutoDraw(True)
                
                # if living_picture_no is active this frame...
                if living_picture_no.status == STARTED:
                    # update params
                    pass
                
                # *living_picture_yes* updates
                
                # if living_picture_yes is starting this frame...
                if living_picture_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_picture_yes.frameNStart = frameN  # exact frame index
                    living_picture_yes.tStart = t  # local t and not account for scr refresh
                    living_picture_yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_picture_yes, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_picture_yes.status = STARTED
                    living_picture_yes.setAutoDraw(True)
                
                # if living_picture_yes is active this frame...
                if living_picture_yes.status == STARTED:
                    # update params
                    pass
                
                # *living_picture_resp* updates
                waitOnFlip = False
                
                # if living_picture_resp is starting this frame...
                if living_picture_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    living_picture_resp.frameNStart = frameN  # exact frame index
                    living_picture_resp.tStart = t  # local t and not account for scr refresh
                    living_picture_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_picture_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_picture_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(living_picture_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(living_picture_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if living_picture_resp.status == STARTED and not waitOnFlip:
                    theseKeys = living_picture_resp.getKeys(keyList=['f', 'j'], ignoreKeys=["escape"], waitRelease=False)
                    _living_picture_resp_allKeys.extend(theseKeys)
                    if len(_living_picture_resp_allKeys):
                        living_picture_resp.keys = _living_picture_resp_allKeys[-1].name  # just the last key pressed
                        living_picture_resp.rt = _living_picture_resp_allKeys[-1].rt
                        living_picture_resp.duration = _living_picture_resp_allKeys[-1].duration
                        # was this correct?
                        if (living_picture_resp.keys == str(correct_answer)) or (living_picture_resp.keys == correct_answer):
                            living_picture_resp.corr = 1
                        else:
                            living_picture_resp.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # *living_picture_question* updates
                
                # if living_picture_question is starting this frame...
                if living_picture_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_picture_question.frameNStart = frameN  # exact frame index
                    living_picture_question.tStart = t  # local t and not account for scr refresh
                    living_picture_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_picture_question, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_picture_question.status = STARTED
                    living_picture_question.setAutoDraw(True)
                
                # if living_picture_question is active this frame...
                if living_picture_question.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in living_pictureComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "living_picture" ---
            for thisComponent in living_pictureComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if living_picture_resp.keys in ['', [], None]:  # No response was made
                living_picture_resp.keys = None
                # was no response the correct answer?!
                if str(correct_answer).lower() == 'none':
                   living_picture_resp.corr = 1;  # correct non-response
                else:
                   living_picture_resp.corr = 0;  # failed to respond (incorrectly)
            # store data for living_a_categorization_trials (TrialHandler)
            living_a_categorization_trials.addData('living_picture_resp.keys',living_picture_resp.keys)
            living_a_categorization_trials.addData('living_picture_resp.corr', living_picture_resp.corr)
            if living_picture_resp.keys != None:  # we had a response
                living_a_categorization_trials.addData('living_picture_resp.rt', living_picture_resp.rt)
                living_a_categorization_trials.addData('living_picture_resp.duration', living_picture_resp.duration)
            # the Routine "living_picture" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed living_rooms_1 repeats of 'living_a_categorization_trials'
        
        
        # set up handler to look after randomisation of conditions etc
        living_a_memotest = data.TrialHandler(nReps=living_rooms_1, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(conditions_memo_living_a),
            seed=None, name='living_a_memotest')
        thisExp.addLoop(living_a_memotest)  # add the loop to the experiment
        thisLiving_a_memotest = living_a_memotest.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisLiving_a_memotest.rgb)
        if thisLiving_a_memotest != None:
            for paramName in thisLiving_a_memotest:
                globals()[paramName] = thisLiving_a_memotest[paramName]
        
        for thisLiving_a_memotest in living_a_memotest:
            currentLoop = living_a_memotest
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisLiving_a_memotest.rgb)
            if thisLiving_a_memotest != None:
                for paramName in thisLiving_a_memotest:
                    globals()[paramName] = thisLiving_a_memotest[paramName]
            
            # --- Prepare to start Routine "living_a_memotest_instr" ---
            continueRoutine = True
            # update component parameters for each repeat
            # skip this Routine if its 'Skip if' condition is True
            continueRoutine = continueRoutine and not (living_a_memotest.thisN > 0)
            living_a_memo_instr_resp.keys = []
            living_a_memo_instr_resp.rt = []
            _living_a_memo_instr_resp_allKeys = []
            # keep track of which components have finished
            living_a_memotest_instrComponents = [living_a_memo_instr_text, living_a_memo_instr_resp]
            for thisComponent in living_a_memotest_instrComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "living_a_memotest_instr" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *living_a_memo_instr_text* updates
                
                # if living_a_memo_instr_text is starting this frame...
                if living_a_memo_instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_a_memo_instr_text.frameNStart = frameN  # exact frame index
                    living_a_memo_instr_text.tStart = t  # local t and not account for scr refresh
                    living_a_memo_instr_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_a_memo_instr_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_a_memo_instr_text.status = STARTED
                    living_a_memo_instr_text.setAutoDraw(True)
                
                # if living_a_memo_instr_text is active this frame...
                if living_a_memo_instr_text.status == STARTED:
                    # update params
                    pass
                
                # *living_a_memo_instr_resp* updates
                waitOnFlip = False
                
                # if living_a_memo_instr_resp is starting this frame...
                if living_a_memo_instr_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_a_memo_instr_resp.frameNStart = frameN  # exact frame index
                    living_a_memo_instr_resp.tStart = t  # local t and not account for scr refresh
                    living_a_memo_instr_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_a_memo_instr_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_a_memo_instr_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(living_a_memo_instr_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(living_a_memo_instr_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if living_a_memo_instr_resp.status == STARTED and not waitOnFlip:
                    theseKeys = living_a_memo_instr_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _living_a_memo_instr_resp_allKeys.extend(theseKeys)
                    if len(_living_a_memo_instr_resp_allKeys):
                        living_a_memo_instr_resp.keys = _living_a_memo_instr_resp_allKeys[-1].name  # just the last key pressed
                        living_a_memo_instr_resp.rt = _living_a_memo_instr_resp_allKeys[-1].rt
                        living_a_memo_instr_resp.duration = _living_a_memo_instr_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in living_a_memotest_instrComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "living_a_memotest_instr" ---
            for thisComponent in living_a_memotest_instrComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "living_a_memotest_instr" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "memo_fix_isi" ---
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from random_isi_code_memo
            # Random Zeit ziehen für Fixationskreuzpräsentation
            import random
            time=random.uniform(0.2,1)
            # keep track of which components have finished
            memo_fix_isiComponents = [memo_fix_pic]
            for thisComponent in memo_fix_isiComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "memo_fix_isi" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *memo_fix_pic* updates
                
                # if memo_fix_pic is starting this frame...
                if memo_fix_pic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memo_fix_pic.frameNStart = frameN  # exact frame index
                    memo_fix_pic.tStart = t  # local t and not account for scr refresh
                    memo_fix_pic.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memo_fix_pic, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memo_fix_pic.status = STARTED
                    memo_fix_pic.setAutoDraw(True)
                
                # if memo_fix_pic is active this frame...
                if memo_fix_pic.status == STARTED:
                    # update params
                    pass
                
                # if memo_fix_pic is stopping this frame...
                if memo_fix_pic.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > memo_fix_pic.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        memo_fix_pic.tStop = t  # not accounting for scr refresh
                        memo_fix_pic.tStopRefresh = tThisFlipGlobal  # on global time
                        memo_fix_pic.frameNStop = frameN  # exact frame index
                        # update status
                        memo_fix_pic.status = FINISHED
                        memo_fix_pic.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in memo_fix_isiComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "memo_fix_isi" ---
            for thisComponent in memo_fix_isiComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "memo_fix_isi" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "memotest_task" ---
            continueRoutine = True
            # update component parameters for each repeat
            memotest_task_stim.setImage(stimulus)
            memotest_task_slider.reset()
            memotest_task_slider_key_resp.keys = []
            memotest_task_slider_key_resp.rt = []
            _memotest_task_slider_key_resp_allKeys = []
            # keep track of which components have finished
            memotest_taskComponents = [memotest_task_stim, memotest_task_slider, memotest_task_slider_key_resp]
            for thisComponent in memotest_taskComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "memotest_task" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *memotest_task_stim* updates
                
                # if memotest_task_stim is starting this frame...
                if memotest_task_stim.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_stim.frameNStart = frameN  # exact frame index
                    memotest_task_stim.tStart = t  # local t and not account for scr refresh
                    memotest_task_stim.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_stim, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_stim.status = STARTED
                    memotest_task_stim.setAutoDraw(True)
                
                # if memotest_task_stim is active this frame...
                if memotest_task_stim.status == STARTED:
                    # update params
                    pass
                
                # *memotest_task_slider* updates
                
                # if memotest_task_slider is starting this frame...
                if memotest_task_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_slider.frameNStart = frameN  # exact frame index
                    memotest_task_slider.tStart = t  # local t and not account for scr refresh
                    memotest_task_slider.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_slider, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_slider.status = STARTED
                    memotest_task_slider.setAutoDraw(True)
                
                # if memotest_task_slider is active this frame...
                if memotest_task_slider.status == STARTED:
                    # update params
                    pass
                
                # *memotest_task_slider_key_resp* updates
                waitOnFlip = False
                
                # if memotest_task_slider_key_resp is starting this frame...
                if memotest_task_slider_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_slider_key_resp.frameNStart = frameN  # exact frame index
                    memotest_task_slider_key_resp.tStart = t  # local t and not account for scr refresh
                    memotest_task_slider_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_slider_key_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_slider_key_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(memotest_task_slider_key_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(memotest_task_slider_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if memotest_task_slider_key_resp.status == STARTED and not waitOnFlip:
                    theseKeys = memotest_task_slider_key_resp.getKeys(keyList=['d', 'f', 'j', 'k'], ignoreKeys=["escape"], waitRelease=False)
                    _memotest_task_slider_key_resp_allKeys.extend(theseKeys)
                    if len(_memotest_task_slider_key_resp_allKeys):
                        memotest_task_slider_key_resp.keys = _memotest_task_slider_key_resp_allKeys[0].name  # just the first key pressed
                        memotest_task_slider_key_resp.rt = _memotest_task_slider_key_resp_allKeys[0].rt
                        memotest_task_slider_key_resp.duration = _memotest_task_slider_key_resp_allKeys[0].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in memotest_taskComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "memotest_task" ---
            for thisComponent in memotest_taskComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if memotest_task_slider_key_resp.keys in ['', [], None]:  # No response was made
                memotest_task_slider_key_resp.keys = None
            living_a_memotest.addData('memotest_task_slider_key_resp.keys',memotest_task_slider_key_resp.keys)
            if memotest_task_slider_key_resp.keys != None:  # we had a response
                living_a_memotest.addData('memotest_task_slider_key_resp.rt', memotest_task_slider_key_resp.rt)
                living_a_memotest.addData('memotest_task_slider_key_resp.duration', memotest_task_slider_key_resp.duration)
            # the Routine "memotest_task" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed living_rooms_1 repeats of 'living_a_memotest'
        
        
        # set up handler to look after randomisation of conditions etc
        living_b_categorization_trials = data.TrialHandler(nReps=living_rooms_2, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(conditions_cat_living_b),
            seed=None, name='living_b_categorization_trials')
        thisExp.addLoop(living_b_categorization_trials)  # add the loop to the experiment
        thisLiving_b_categorization_trial = living_b_categorization_trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisLiving_b_categorization_trial.rgb)
        if thisLiving_b_categorization_trial != None:
            for paramName in thisLiving_b_categorization_trial:
                globals()[paramName] = thisLiving_b_categorization_trial[paramName]
        
        for thisLiving_b_categorization_trial in living_b_categorization_trials:
            currentLoop = living_b_categorization_trials
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisLiving_b_categorization_trial.rgb)
            if thisLiving_b_categorization_trial != None:
                for paramName in thisLiving_b_categorization_trial:
                    globals()[paramName] = thisLiving_b_categorization_trial[paramName]
            
            # --- Prepare to start Routine "living_b" ---
            continueRoutine = True
            # update component parameters for each repeat
            # skip this Routine if its 'Skip if' condition is True
            continueRoutine = continueRoutine and not (living_b_categorization_trials.thisN > 0)
            living_b_resp.keys = []
            living_b_resp.rt = []
            _living_b_resp_allKeys = []
            living_b_block_no.setText(block_total)
            # keep track of which components have finished
            living_bComponents = [living_b_text, living_b_text_2, living_b_resp, living_b_block_no]
            for thisComponent in living_bComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "living_b" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *living_b_text* updates
                
                # if living_b_text is starting this frame...
                if living_b_text.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    living_b_text.frameNStart = frameN  # exact frame index
                    living_b_text.tStart = t  # local t and not account for scr refresh
                    living_b_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_b_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_b_text.status = STARTED
                    living_b_text.setAutoDraw(True)
                
                # if living_b_text is active this frame...
                if living_b_text.status == STARTED:
                    # update params
                    pass
                
                # *living_b_text_2* updates
                
                # if living_b_text_2 is starting this frame...
                if living_b_text_2.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    living_b_text_2.frameNStart = frameN  # exact frame index
                    living_b_text_2.tStart = t  # local t and not account for scr refresh
                    living_b_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_b_text_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'living_b_text_2.started')
                    # update status
                    living_b_text_2.status = STARTED
                    living_b_text_2.setAutoDraw(True)
                
                # if living_b_text_2 is active this frame...
                if living_b_text_2.status == STARTED:
                    # update params
                    pass
                
                # *living_b_resp* updates
                waitOnFlip = False
                
                # if living_b_resp is starting this frame...
                if living_b_resp.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    living_b_resp.frameNStart = frameN  # exact frame index
                    living_b_resp.tStart = t  # local t and not account for scr refresh
                    living_b_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_b_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_b_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(living_b_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(living_b_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if living_b_resp.status == STARTED and not waitOnFlip:
                    theseKeys = living_b_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _living_b_resp_allKeys.extend(theseKeys)
                    if len(_living_b_resp_allKeys):
                        living_b_resp.keys = _living_b_resp_allKeys[-1].name  # just the last key pressed
                        living_b_resp.rt = _living_b_resp_allKeys[-1].rt
                        living_b_resp.duration = _living_b_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # *living_b_block_no* updates
                
                # if living_b_block_no is starting this frame...
                if living_b_block_no.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    living_b_block_no.frameNStart = frameN  # exact frame index
                    living_b_block_no.tStart = t  # local t and not account for scr refresh
                    living_b_block_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_b_block_no, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'living_b_block_no.started')
                    # update status
                    living_b_block_no.status = STARTED
                    living_b_block_no.setAutoDraw(True)
                
                # if living_b_block_no is active this frame...
                if living_b_block_no.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in living_bComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "living_b" ---
            for thisComponent in living_bComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "living_b" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "living_random_isi" ---
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from living_random_isi_code
            # Random Zeit ziehen für Fixationskreuzpräsentation
            import random
            time=random.uniform(0.9,1.9)
            # keep track of which components have finished
            living_random_isiComponents = [living_random_isi_fix, living_random_isi_no, living_random_isi_yes, living_random_isi_question]
            for thisComponent in living_random_isiComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "living_random_isi" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *living_random_isi_fix* updates
                
                # if living_random_isi_fix is starting this frame...
                if living_random_isi_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_random_isi_fix.frameNStart = frameN  # exact frame index
                    living_random_isi_fix.tStart = t  # local t and not account for scr refresh
                    living_random_isi_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_random_isi_fix, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_random_isi_fix.status = STARTED
                    living_random_isi_fix.setAutoDraw(True)
                
                # if living_random_isi_fix is active this frame...
                if living_random_isi_fix.status == STARTED:
                    # update params
                    pass
                
                # if living_random_isi_fix is stopping this frame...
                if living_random_isi_fix.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > living_random_isi_fix.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        living_random_isi_fix.tStop = t  # not accounting for scr refresh
                        living_random_isi_fix.tStopRefresh = tThisFlipGlobal  # on global time
                        living_random_isi_fix.frameNStop = frameN  # exact frame index
                        # update status
                        living_random_isi_fix.status = FINISHED
                        living_random_isi_fix.setAutoDraw(False)
                
                # *living_random_isi_no* updates
                
                # if living_random_isi_no is starting this frame...
                if living_random_isi_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_random_isi_no.frameNStart = frameN  # exact frame index
                    living_random_isi_no.tStart = t  # local t and not account for scr refresh
                    living_random_isi_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_random_isi_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_random_isi_no.status = STARTED
                    living_random_isi_no.setAutoDraw(True)
                
                # if living_random_isi_no is active this frame...
                if living_random_isi_no.status == STARTED:
                    # update params
                    pass
                
                # if living_random_isi_no is stopping this frame...
                if living_random_isi_no.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > living_random_isi_no.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        living_random_isi_no.tStop = t  # not accounting for scr refresh
                        living_random_isi_no.tStopRefresh = tThisFlipGlobal  # on global time
                        living_random_isi_no.frameNStop = frameN  # exact frame index
                        # update status
                        living_random_isi_no.status = FINISHED
                        living_random_isi_no.setAutoDraw(False)
                
                # *living_random_isi_yes* updates
                
                # if living_random_isi_yes is starting this frame...
                if living_random_isi_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_random_isi_yes.frameNStart = frameN  # exact frame index
                    living_random_isi_yes.tStart = t  # local t and not account for scr refresh
                    living_random_isi_yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_random_isi_yes, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_random_isi_yes.status = STARTED
                    living_random_isi_yes.setAutoDraw(True)
                
                # if living_random_isi_yes is active this frame...
                if living_random_isi_yes.status == STARTED:
                    # update params
                    pass
                
                # if living_random_isi_yes is stopping this frame...
                if living_random_isi_yes.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > living_random_isi_yes.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        living_random_isi_yes.tStop = t  # not accounting for scr refresh
                        living_random_isi_yes.tStopRefresh = tThisFlipGlobal  # on global time
                        living_random_isi_yes.frameNStop = frameN  # exact frame index
                        # update status
                        living_random_isi_yes.status = FINISHED
                        living_random_isi_yes.setAutoDraw(False)
                
                # *living_random_isi_question* updates
                
                # if living_random_isi_question is starting this frame...
                if living_random_isi_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_random_isi_question.frameNStart = frameN  # exact frame index
                    living_random_isi_question.tStart = t  # local t and not account for scr refresh
                    living_random_isi_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_random_isi_question, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_random_isi_question.status = STARTED
                    living_random_isi_question.setAutoDraw(True)
                
                # if living_random_isi_question is active this frame...
                if living_random_isi_question.status == STARTED:
                    # update params
                    pass
                
                # if living_random_isi_question is stopping this frame...
                if living_random_isi_question.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > living_random_isi_question.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        living_random_isi_question.tStop = t  # not accounting for scr refresh
                        living_random_isi_question.tStopRefresh = tThisFlipGlobal  # on global time
                        living_random_isi_question.frameNStop = frameN  # exact frame index
                        # update status
                        living_random_isi_question.status = FINISHED
                        living_random_isi_question.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in living_random_isiComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "living_random_isi" ---
            for thisComponent in living_random_isiComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "living_random_isi" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "living_picture" ---
            continueRoutine = True
            # update component parameters for each repeat
            living_picture_image.setImage(stimulus)
            living_picture_resp.keys = []
            living_picture_resp.rt = []
            _living_picture_resp_allKeys = []
            # keep track of which components have finished
            living_pictureComponents = [living_picture_fix, living_picture_image, living_picture_no, living_picture_yes, living_picture_resp, living_picture_question]
            for thisComponent in living_pictureComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "living_picture" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *living_picture_fix* updates
                
                # if living_picture_fix is starting this frame...
                if living_picture_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_picture_fix.frameNStart = frameN  # exact frame index
                    living_picture_fix.tStart = t  # local t and not account for scr refresh
                    living_picture_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_picture_fix, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_picture_fix.status = STARTED
                    living_picture_fix.setAutoDraw(True)
                
                # if living_picture_fix is active this frame...
                if living_picture_fix.status == STARTED:
                    # update params
                    pass
                
                # *living_picture_image* updates
                
                # if living_picture_image is starting this frame...
                if living_picture_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_picture_image.frameNStart = frameN  # exact frame index
                    living_picture_image.tStart = t  # local t and not account for scr refresh
                    living_picture_image.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_picture_image, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'living_picture_image.started')
                    # update status
                    living_picture_image.status = STARTED
                    living_picture_image.setAutoDraw(True)
                
                # if living_picture_image is active this frame...
                if living_picture_image.status == STARTED:
                    # update params
                    pass
                
                # if living_picture_image is stopping this frame...
                if living_picture_image.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > living_picture_image.tStartRefresh + 0.75-frameTolerance:
                        # keep track of stop time/frame for later
                        living_picture_image.tStop = t  # not accounting for scr refresh
                        living_picture_image.tStopRefresh = tThisFlipGlobal  # on global time
                        living_picture_image.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'living_picture_image.stopped')
                        # update status
                        living_picture_image.status = FINISHED
                        living_picture_image.setAutoDraw(False)
                
                # *living_picture_no* updates
                
                # if living_picture_no is starting this frame...
                if living_picture_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_picture_no.frameNStart = frameN  # exact frame index
                    living_picture_no.tStart = t  # local t and not account for scr refresh
                    living_picture_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_picture_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_picture_no.status = STARTED
                    living_picture_no.setAutoDraw(True)
                
                # if living_picture_no is active this frame...
                if living_picture_no.status == STARTED:
                    # update params
                    pass
                
                # *living_picture_yes* updates
                
                # if living_picture_yes is starting this frame...
                if living_picture_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_picture_yes.frameNStart = frameN  # exact frame index
                    living_picture_yes.tStart = t  # local t and not account for scr refresh
                    living_picture_yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_picture_yes, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_picture_yes.status = STARTED
                    living_picture_yes.setAutoDraw(True)
                
                # if living_picture_yes is active this frame...
                if living_picture_yes.status == STARTED:
                    # update params
                    pass
                
                # *living_picture_resp* updates
                waitOnFlip = False
                
                # if living_picture_resp is starting this frame...
                if living_picture_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    living_picture_resp.frameNStart = frameN  # exact frame index
                    living_picture_resp.tStart = t  # local t and not account for scr refresh
                    living_picture_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_picture_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_picture_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(living_picture_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(living_picture_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if living_picture_resp.status == STARTED and not waitOnFlip:
                    theseKeys = living_picture_resp.getKeys(keyList=['f', 'j'], ignoreKeys=["escape"], waitRelease=False)
                    _living_picture_resp_allKeys.extend(theseKeys)
                    if len(_living_picture_resp_allKeys):
                        living_picture_resp.keys = _living_picture_resp_allKeys[-1].name  # just the last key pressed
                        living_picture_resp.rt = _living_picture_resp_allKeys[-1].rt
                        living_picture_resp.duration = _living_picture_resp_allKeys[-1].duration
                        # was this correct?
                        if (living_picture_resp.keys == str(correct_answer)) or (living_picture_resp.keys == correct_answer):
                            living_picture_resp.corr = 1
                        else:
                            living_picture_resp.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # *living_picture_question* updates
                
                # if living_picture_question is starting this frame...
                if living_picture_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_picture_question.frameNStart = frameN  # exact frame index
                    living_picture_question.tStart = t  # local t and not account for scr refresh
                    living_picture_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_picture_question, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_picture_question.status = STARTED
                    living_picture_question.setAutoDraw(True)
                
                # if living_picture_question is active this frame...
                if living_picture_question.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in living_pictureComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "living_picture" ---
            for thisComponent in living_pictureComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if living_picture_resp.keys in ['', [], None]:  # No response was made
                living_picture_resp.keys = None
                # was no response the correct answer?!
                if str(correct_answer).lower() == 'none':
                   living_picture_resp.corr = 1;  # correct non-response
                else:
                   living_picture_resp.corr = 0;  # failed to respond (incorrectly)
            # store data for living_b_categorization_trials (TrialHandler)
            living_b_categorization_trials.addData('living_picture_resp.keys',living_picture_resp.keys)
            living_b_categorization_trials.addData('living_picture_resp.corr', living_picture_resp.corr)
            if living_picture_resp.keys != None:  # we had a response
                living_b_categorization_trials.addData('living_picture_resp.rt', living_picture_resp.rt)
                living_b_categorization_trials.addData('living_picture_resp.duration', living_picture_resp.duration)
            # the Routine "living_picture" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed living_rooms_2 repeats of 'living_b_categorization_trials'
        
        
        # set up handler to look after randomisation of conditions etc
        living_b_memotest = data.TrialHandler(nReps=living_rooms_2, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(conditions_memo_living_b),
            seed=None, name='living_b_memotest')
        thisExp.addLoop(living_b_memotest)  # add the loop to the experiment
        thisLiving_b_memotest = living_b_memotest.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisLiving_b_memotest.rgb)
        if thisLiving_b_memotest != None:
            for paramName in thisLiving_b_memotest:
                globals()[paramName] = thisLiving_b_memotest[paramName]
        
        for thisLiving_b_memotest in living_b_memotest:
            currentLoop = living_b_memotest
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisLiving_b_memotest.rgb)
            if thisLiving_b_memotest != None:
                for paramName in thisLiving_b_memotest:
                    globals()[paramName] = thisLiving_b_memotest[paramName]
            
            # --- Prepare to start Routine "living_b_memotest_instr" ---
            continueRoutine = True
            # update component parameters for each repeat
            # skip this Routine if its 'Skip if' condition is True
            continueRoutine = continueRoutine and not (living_b_memotest.thisN > 0)
            living_b_memo_instr_resp.keys = []
            living_b_memo_instr_resp.rt = []
            _living_b_memo_instr_resp_allKeys = []
            # keep track of which components have finished
            living_b_memotest_instrComponents = [living_b_memo_instr_text, living_b_memo_instr_resp]
            for thisComponent in living_b_memotest_instrComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "living_b_memotest_instr" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *living_b_memo_instr_text* updates
                
                # if living_b_memo_instr_text is starting this frame...
                if living_b_memo_instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_b_memo_instr_text.frameNStart = frameN  # exact frame index
                    living_b_memo_instr_text.tStart = t  # local t and not account for scr refresh
                    living_b_memo_instr_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_b_memo_instr_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_b_memo_instr_text.status = STARTED
                    living_b_memo_instr_text.setAutoDraw(True)
                
                # if living_b_memo_instr_text is active this frame...
                if living_b_memo_instr_text.status == STARTED:
                    # update params
                    pass
                
                # *living_b_memo_instr_resp* updates
                waitOnFlip = False
                
                # if living_b_memo_instr_resp is starting this frame...
                if living_b_memo_instr_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    living_b_memo_instr_resp.frameNStart = frameN  # exact frame index
                    living_b_memo_instr_resp.tStart = t  # local t and not account for scr refresh
                    living_b_memo_instr_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(living_b_memo_instr_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    living_b_memo_instr_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(living_b_memo_instr_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(living_b_memo_instr_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if living_b_memo_instr_resp.status == STARTED and not waitOnFlip:
                    theseKeys = living_b_memo_instr_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _living_b_memo_instr_resp_allKeys.extend(theseKeys)
                    if len(_living_b_memo_instr_resp_allKeys):
                        living_b_memo_instr_resp.keys = _living_b_memo_instr_resp_allKeys[-1].name  # just the last key pressed
                        living_b_memo_instr_resp.rt = _living_b_memo_instr_resp_allKeys[-1].rt
                        living_b_memo_instr_resp.duration = _living_b_memo_instr_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in living_b_memotest_instrComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "living_b_memotest_instr" ---
            for thisComponent in living_b_memotest_instrComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "living_b_memotest_instr" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "memo_fix_isi" ---
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from random_isi_code_memo
            # Random Zeit ziehen für Fixationskreuzpräsentation
            import random
            time=random.uniform(0.2,1)
            # keep track of which components have finished
            memo_fix_isiComponents = [memo_fix_pic]
            for thisComponent in memo_fix_isiComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "memo_fix_isi" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *memo_fix_pic* updates
                
                # if memo_fix_pic is starting this frame...
                if memo_fix_pic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memo_fix_pic.frameNStart = frameN  # exact frame index
                    memo_fix_pic.tStart = t  # local t and not account for scr refresh
                    memo_fix_pic.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memo_fix_pic, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memo_fix_pic.status = STARTED
                    memo_fix_pic.setAutoDraw(True)
                
                # if memo_fix_pic is active this frame...
                if memo_fix_pic.status == STARTED:
                    # update params
                    pass
                
                # if memo_fix_pic is stopping this frame...
                if memo_fix_pic.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > memo_fix_pic.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        memo_fix_pic.tStop = t  # not accounting for scr refresh
                        memo_fix_pic.tStopRefresh = tThisFlipGlobal  # on global time
                        memo_fix_pic.frameNStop = frameN  # exact frame index
                        # update status
                        memo_fix_pic.status = FINISHED
                        memo_fix_pic.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in memo_fix_isiComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "memo_fix_isi" ---
            for thisComponent in memo_fix_isiComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "memo_fix_isi" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "memotest_task" ---
            continueRoutine = True
            # update component parameters for each repeat
            memotest_task_stim.setImage(stimulus)
            memotest_task_slider.reset()
            memotest_task_slider_key_resp.keys = []
            memotest_task_slider_key_resp.rt = []
            _memotest_task_slider_key_resp_allKeys = []
            # keep track of which components have finished
            memotest_taskComponents = [memotest_task_stim, memotest_task_slider, memotest_task_slider_key_resp]
            for thisComponent in memotest_taskComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "memotest_task" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *memotest_task_stim* updates
                
                # if memotest_task_stim is starting this frame...
                if memotest_task_stim.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_stim.frameNStart = frameN  # exact frame index
                    memotest_task_stim.tStart = t  # local t and not account for scr refresh
                    memotest_task_stim.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_stim, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_stim.status = STARTED
                    memotest_task_stim.setAutoDraw(True)
                
                # if memotest_task_stim is active this frame...
                if memotest_task_stim.status == STARTED:
                    # update params
                    pass
                
                # *memotest_task_slider* updates
                
                # if memotest_task_slider is starting this frame...
                if memotest_task_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_slider.frameNStart = frameN  # exact frame index
                    memotest_task_slider.tStart = t  # local t and not account for scr refresh
                    memotest_task_slider.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_slider, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_slider.status = STARTED
                    memotest_task_slider.setAutoDraw(True)
                
                # if memotest_task_slider is active this frame...
                if memotest_task_slider.status == STARTED:
                    # update params
                    pass
                
                # *memotest_task_slider_key_resp* updates
                waitOnFlip = False
                
                # if memotest_task_slider_key_resp is starting this frame...
                if memotest_task_slider_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_slider_key_resp.frameNStart = frameN  # exact frame index
                    memotest_task_slider_key_resp.tStart = t  # local t and not account for scr refresh
                    memotest_task_slider_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_slider_key_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_slider_key_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(memotest_task_slider_key_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(memotest_task_slider_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if memotest_task_slider_key_resp.status == STARTED and not waitOnFlip:
                    theseKeys = memotest_task_slider_key_resp.getKeys(keyList=['d', 'f', 'j', 'k'], ignoreKeys=["escape"], waitRelease=False)
                    _memotest_task_slider_key_resp_allKeys.extend(theseKeys)
                    if len(_memotest_task_slider_key_resp_allKeys):
                        memotest_task_slider_key_resp.keys = _memotest_task_slider_key_resp_allKeys[0].name  # just the first key pressed
                        memotest_task_slider_key_resp.rt = _memotest_task_slider_key_resp_allKeys[0].rt
                        memotest_task_slider_key_resp.duration = _memotest_task_slider_key_resp_allKeys[0].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in memotest_taskComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "memotest_task" ---
            for thisComponent in memotest_taskComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if memotest_task_slider_key_resp.keys in ['', [], None]:  # No response was made
                memotest_task_slider_key_resp.keys = None
            living_b_memotest.addData('memotest_task_slider_key_resp.keys',memotest_task_slider_key_resp.keys)
            if memotest_task_slider_key_resp.keys != None:  # we had a response
                living_b_memotest.addData('memotest_task_slider_key_resp.rt', memotest_task_slider_key_resp.rt)
                living_b_memotest.addData('memotest_task_slider_key_resp.duration', memotest_task_slider_key_resp.duration)
            # the Routine "memotest_task" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed living_rooms_2 repeats of 'living_b_memotest'
        
        
        # set up handler to look after randomisation of conditions etc
        bed_a_categorization_trials = data.TrialHandler(nReps=bedrooms_1, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(conditions_cat_sleep_a),
            seed=None, name='bed_a_categorization_trials')
        thisExp.addLoop(bed_a_categorization_trials)  # add the loop to the experiment
        thisBed_a_categorization_trial = bed_a_categorization_trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisBed_a_categorization_trial.rgb)
        if thisBed_a_categorization_trial != None:
            for paramName in thisBed_a_categorization_trial:
                globals()[paramName] = thisBed_a_categorization_trial[paramName]
        
        for thisBed_a_categorization_trial in bed_a_categorization_trials:
            currentLoop = bed_a_categorization_trials
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisBed_a_categorization_trial.rgb)
            if thisBed_a_categorization_trial != None:
                for paramName in thisBed_a_categorization_trial:
                    globals()[paramName] = thisBed_a_categorization_trial[paramName]
            
            # --- Prepare to start Routine "bed_a" ---
            continueRoutine = True
            # update component parameters for each repeat
            # skip this Routine if its 'Skip if' condition is True
            continueRoutine = continueRoutine and not (bed_a_categorization_trials.thisN > 0)
            bed_a_resp.keys = []
            bed_a_resp.rt = []
            _bed_a_resp_allKeys = []
            bed_a_block_no.setText(block_total)
            # keep track of which components have finished
            bed_aComponents = [bed_a_text, bed_a_text_2, bed_a_resp, bed_a_block_no]
            for thisComponent in bed_aComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "bed_a" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *bed_a_text* updates
                
                # if bed_a_text is starting this frame...
                if bed_a_text.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    bed_a_text.frameNStart = frameN  # exact frame index
                    bed_a_text.tStart = t  # local t and not account for scr refresh
                    bed_a_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_a_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_a_text.status = STARTED
                    bed_a_text.setAutoDraw(True)
                
                # if bed_a_text is active this frame...
                if bed_a_text.status == STARTED:
                    # update params
                    pass
                
                # *bed_a_text_2* updates
                
                # if bed_a_text_2 is starting this frame...
                if bed_a_text_2.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    bed_a_text_2.frameNStart = frameN  # exact frame index
                    bed_a_text_2.tStart = t  # local t and not account for scr refresh
                    bed_a_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_a_text_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'bed_a_text_2.started')
                    # update status
                    bed_a_text_2.status = STARTED
                    bed_a_text_2.setAutoDraw(True)
                
                # if bed_a_text_2 is active this frame...
                if bed_a_text_2.status == STARTED:
                    # update params
                    pass
                
                # *bed_a_resp* updates
                waitOnFlip = False
                
                # if bed_a_resp is starting this frame...
                if bed_a_resp.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    bed_a_resp.frameNStart = frameN  # exact frame index
                    bed_a_resp.tStart = t  # local t and not account for scr refresh
                    bed_a_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_a_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_a_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(bed_a_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(bed_a_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if bed_a_resp.status == STARTED and not waitOnFlip:
                    theseKeys = bed_a_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _bed_a_resp_allKeys.extend(theseKeys)
                    if len(_bed_a_resp_allKeys):
                        bed_a_resp.keys = _bed_a_resp_allKeys[-1].name  # just the last key pressed
                        bed_a_resp.rt = _bed_a_resp_allKeys[-1].rt
                        bed_a_resp.duration = _bed_a_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # *bed_a_block_no* updates
                
                # if bed_a_block_no is starting this frame...
                if bed_a_block_no.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    bed_a_block_no.frameNStart = frameN  # exact frame index
                    bed_a_block_no.tStart = t  # local t and not account for scr refresh
                    bed_a_block_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_a_block_no, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'bed_a_block_no.started')
                    # update status
                    bed_a_block_no.status = STARTED
                    bed_a_block_no.setAutoDraw(True)
                
                # if bed_a_block_no is active this frame...
                if bed_a_block_no.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in bed_aComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "bed_a" ---
            for thisComponent in bed_aComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "bed_a" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "bed_random_isi" ---
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from bed_random_isi_code
            # Random Zeit ziehen für Fixationskreuzpräsentation
            import random
            time=random.uniform(0.9,1.9)
            # keep track of which components have finished
            bed_random_isiComponents = [bed_random_isi_fix, bed_random_isi_no, bed_random_isi_yes, bed_random_isi_question]
            for thisComponent in bed_random_isiComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "bed_random_isi" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *bed_random_isi_fix* updates
                
                # if bed_random_isi_fix is starting this frame...
                if bed_random_isi_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_random_isi_fix.frameNStart = frameN  # exact frame index
                    bed_random_isi_fix.tStart = t  # local t and not account for scr refresh
                    bed_random_isi_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_random_isi_fix, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_random_isi_fix.status = STARTED
                    bed_random_isi_fix.setAutoDraw(True)
                
                # if bed_random_isi_fix is active this frame...
                if bed_random_isi_fix.status == STARTED:
                    # update params
                    pass
                
                # if bed_random_isi_fix is stopping this frame...
                if bed_random_isi_fix.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > bed_random_isi_fix.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        bed_random_isi_fix.tStop = t  # not accounting for scr refresh
                        bed_random_isi_fix.tStopRefresh = tThisFlipGlobal  # on global time
                        bed_random_isi_fix.frameNStop = frameN  # exact frame index
                        # update status
                        bed_random_isi_fix.status = FINISHED
                        bed_random_isi_fix.setAutoDraw(False)
                
                # *bed_random_isi_no* updates
                
                # if bed_random_isi_no is starting this frame...
                if bed_random_isi_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_random_isi_no.frameNStart = frameN  # exact frame index
                    bed_random_isi_no.tStart = t  # local t and not account for scr refresh
                    bed_random_isi_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_random_isi_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_random_isi_no.status = STARTED
                    bed_random_isi_no.setAutoDraw(True)
                
                # if bed_random_isi_no is active this frame...
                if bed_random_isi_no.status == STARTED:
                    # update params
                    pass
                
                # if bed_random_isi_no is stopping this frame...
                if bed_random_isi_no.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > bed_random_isi_no.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        bed_random_isi_no.tStop = t  # not accounting for scr refresh
                        bed_random_isi_no.tStopRefresh = tThisFlipGlobal  # on global time
                        bed_random_isi_no.frameNStop = frameN  # exact frame index
                        # update status
                        bed_random_isi_no.status = FINISHED
                        bed_random_isi_no.setAutoDraw(False)
                
                # *bed_random_isi_yes* updates
                
                # if bed_random_isi_yes is starting this frame...
                if bed_random_isi_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_random_isi_yes.frameNStart = frameN  # exact frame index
                    bed_random_isi_yes.tStart = t  # local t and not account for scr refresh
                    bed_random_isi_yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_random_isi_yes, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_random_isi_yes.status = STARTED
                    bed_random_isi_yes.setAutoDraw(True)
                
                # if bed_random_isi_yes is active this frame...
                if bed_random_isi_yes.status == STARTED:
                    # update params
                    pass
                
                # if bed_random_isi_yes is stopping this frame...
                if bed_random_isi_yes.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > bed_random_isi_yes.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        bed_random_isi_yes.tStop = t  # not accounting for scr refresh
                        bed_random_isi_yes.tStopRefresh = tThisFlipGlobal  # on global time
                        bed_random_isi_yes.frameNStop = frameN  # exact frame index
                        # update status
                        bed_random_isi_yes.status = FINISHED
                        bed_random_isi_yes.setAutoDraw(False)
                
                # *bed_random_isi_question* updates
                
                # if bed_random_isi_question is starting this frame...
                if bed_random_isi_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_random_isi_question.frameNStart = frameN  # exact frame index
                    bed_random_isi_question.tStart = t  # local t and not account for scr refresh
                    bed_random_isi_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_random_isi_question, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_random_isi_question.status = STARTED
                    bed_random_isi_question.setAutoDraw(True)
                
                # if bed_random_isi_question is active this frame...
                if bed_random_isi_question.status == STARTED:
                    # update params
                    pass
                
                # if bed_random_isi_question is stopping this frame...
                if bed_random_isi_question.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > bed_random_isi_question.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        bed_random_isi_question.tStop = t  # not accounting for scr refresh
                        bed_random_isi_question.tStopRefresh = tThisFlipGlobal  # on global time
                        bed_random_isi_question.frameNStop = frameN  # exact frame index
                        # update status
                        bed_random_isi_question.status = FINISHED
                        bed_random_isi_question.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in bed_random_isiComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "bed_random_isi" ---
            for thisComponent in bed_random_isiComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "bed_random_isi" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "bed_picture" ---
            continueRoutine = True
            # update component parameters for each repeat
            bed_picture_image.setImage(stimulus)
            bed_picture_resp.keys = []
            bed_picture_resp.rt = []
            _bed_picture_resp_allKeys = []
            # keep track of which components have finished
            bed_pictureComponents = [bed_picture_fix, bed_picture_image, bed_picture_no, bed_picture_yes, bed_picture_resp, bed_picture_question]
            for thisComponent in bed_pictureComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "bed_picture" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *bed_picture_fix* updates
                
                # if bed_picture_fix is starting this frame...
                if bed_picture_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_picture_fix.frameNStart = frameN  # exact frame index
                    bed_picture_fix.tStart = t  # local t and not account for scr refresh
                    bed_picture_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_picture_fix, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_picture_fix.status = STARTED
                    bed_picture_fix.setAutoDraw(True)
                
                # if bed_picture_fix is active this frame...
                if bed_picture_fix.status == STARTED:
                    # update params
                    pass
                
                # *bed_picture_image* updates
                
                # if bed_picture_image is starting this frame...
                if bed_picture_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_picture_image.frameNStart = frameN  # exact frame index
                    bed_picture_image.tStart = t  # local t and not account for scr refresh
                    bed_picture_image.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_picture_image, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'bed_picture_image.started')
                    # update status
                    bed_picture_image.status = STARTED
                    bed_picture_image.setAutoDraw(True)
                
                # if bed_picture_image is active this frame...
                if bed_picture_image.status == STARTED:
                    # update params
                    pass
                
                # if bed_picture_image is stopping this frame...
                if bed_picture_image.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > bed_picture_image.tStartRefresh + 0.75-frameTolerance:
                        # keep track of stop time/frame for later
                        bed_picture_image.tStop = t  # not accounting for scr refresh
                        bed_picture_image.tStopRefresh = tThisFlipGlobal  # on global time
                        bed_picture_image.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'bed_picture_image.stopped')
                        # update status
                        bed_picture_image.status = FINISHED
                        bed_picture_image.setAutoDraw(False)
                
                # *bed_picture_no* updates
                
                # if bed_picture_no is starting this frame...
                if bed_picture_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_picture_no.frameNStart = frameN  # exact frame index
                    bed_picture_no.tStart = t  # local t and not account for scr refresh
                    bed_picture_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_picture_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_picture_no.status = STARTED
                    bed_picture_no.setAutoDraw(True)
                
                # if bed_picture_no is active this frame...
                if bed_picture_no.status == STARTED:
                    # update params
                    pass
                
                # *bed_picture_yes* updates
                
                # if bed_picture_yes is starting this frame...
                if bed_picture_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_picture_yes.frameNStart = frameN  # exact frame index
                    bed_picture_yes.tStart = t  # local t and not account for scr refresh
                    bed_picture_yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_picture_yes, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_picture_yes.status = STARTED
                    bed_picture_yes.setAutoDraw(True)
                
                # if bed_picture_yes is active this frame...
                if bed_picture_yes.status == STARTED:
                    # update params
                    pass
                
                # *bed_picture_resp* updates
                waitOnFlip = False
                
                # if bed_picture_resp is starting this frame...
                if bed_picture_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_picture_resp.frameNStart = frameN  # exact frame index
                    bed_picture_resp.tStart = t  # local t and not account for scr refresh
                    bed_picture_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_picture_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_picture_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(bed_picture_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(bed_picture_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if bed_picture_resp.status == STARTED and not waitOnFlip:
                    theseKeys = bed_picture_resp.getKeys(keyList=['f', 'j'], ignoreKeys=["escape"], waitRelease=False)
                    _bed_picture_resp_allKeys.extend(theseKeys)
                    if len(_bed_picture_resp_allKeys):
                        bed_picture_resp.keys = _bed_picture_resp_allKeys[-1].name  # just the last key pressed
                        bed_picture_resp.rt = _bed_picture_resp_allKeys[-1].rt
                        bed_picture_resp.duration = _bed_picture_resp_allKeys[-1].duration
                        # was this correct?
                        if (bed_picture_resp.keys == str(correct_answer)) or (bed_picture_resp.keys == correct_answer):
                            bed_picture_resp.corr = 1
                        else:
                            bed_picture_resp.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # *bed_picture_question* updates
                
                # if bed_picture_question is starting this frame...
                if bed_picture_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_picture_question.frameNStart = frameN  # exact frame index
                    bed_picture_question.tStart = t  # local t and not account for scr refresh
                    bed_picture_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_picture_question, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_picture_question.status = STARTED
                    bed_picture_question.setAutoDraw(True)
                
                # if bed_picture_question is active this frame...
                if bed_picture_question.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in bed_pictureComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "bed_picture" ---
            for thisComponent in bed_pictureComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if bed_picture_resp.keys in ['', [], None]:  # No response was made
                bed_picture_resp.keys = None
                # was no response the correct answer?!
                if str(correct_answer).lower() == 'none':
                   bed_picture_resp.corr = 1;  # correct non-response
                else:
                   bed_picture_resp.corr = 0;  # failed to respond (incorrectly)
            # store data for bed_a_categorization_trials (TrialHandler)
            bed_a_categorization_trials.addData('bed_picture_resp.keys',bed_picture_resp.keys)
            bed_a_categorization_trials.addData('bed_picture_resp.corr', bed_picture_resp.corr)
            if bed_picture_resp.keys != None:  # we had a response
                bed_a_categorization_trials.addData('bed_picture_resp.rt', bed_picture_resp.rt)
                bed_a_categorization_trials.addData('bed_picture_resp.duration', bed_picture_resp.duration)
            # the Routine "bed_picture" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed bedrooms_1 repeats of 'bed_a_categorization_trials'
        
        
        # set up handler to look after randomisation of conditions etc
        bed_a_memotest = data.TrialHandler(nReps=bedrooms_1, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(conditions_memo_sleep_a),
            seed=None, name='bed_a_memotest')
        thisExp.addLoop(bed_a_memotest)  # add the loop to the experiment
        thisBed_a_memotest = bed_a_memotest.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisBed_a_memotest.rgb)
        if thisBed_a_memotest != None:
            for paramName in thisBed_a_memotest:
                globals()[paramName] = thisBed_a_memotest[paramName]
        
        for thisBed_a_memotest in bed_a_memotest:
            currentLoop = bed_a_memotest
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisBed_a_memotest.rgb)
            if thisBed_a_memotest != None:
                for paramName in thisBed_a_memotest:
                    globals()[paramName] = thisBed_a_memotest[paramName]
            
            # --- Prepare to start Routine "bed_a_memotest_instr" ---
            continueRoutine = True
            # update component parameters for each repeat
            # skip this Routine if its 'Skip if' condition is True
            continueRoutine = continueRoutine and not (bed_a_memotest.thisN > 0)
            bed_a_memo_instr_resp.keys = []
            bed_a_memo_instr_resp.rt = []
            _bed_a_memo_instr_resp_allKeys = []
            # keep track of which components have finished
            bed_a_memotest_instrComponents = [bed_a_memo_instr_text, bed_a_memo_instr_resp]
            for thisComponent in bed_a_memotest_instrComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "bed_a_memotest_instr" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *bed_a_memo_instr_text* updates
                
                # if bed_a_memo_instr_text is starting this frame...
                if bed_a_memo_instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_a_memo_instr_text.frameNStart = frameN  # exact frame index
                    bed_a_memo_instr_text.tStart = t  # local t and not account for scr refresh
                    bed_a_memo_instr_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_a_memo_instr_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_a_memo_instr_text.status = STARTED
                    bed_a_memo_instr_text.setAutoDraw(True)
                
                # if bed_a_memo_instr_text is active this frame...
                if bed_a_memo_instr_text.status == STARTED:
                    # update params
                    pass
                
                # *bed_a_memo_instr_resp* updates
                waitOnFlip = False
                
                # if bed_a_memo_instr_resp is starting this frame...
                if bed_a_memo_instr_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_a_memo_instr_resp.frameNStart = frameN  # exact frame index
                    bed_a_memo_instr_resp.tStart = t  # local t and not account for scr refresh
                    bed_a_memo_instr_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_a_memo_instr_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_a_memo_instr_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(bed_a_memo_instr_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(bed_a_memo_instr_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if bed_a_memo_instr_resp.status == STARTED and not waitOnFlip:
                    theseKeys = bed_a_memo_instr_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _bed_a_memo_instr_resp_allKeys.extend(theseKeys)
                    if len(_bed_a_memo_instr_resp_allKeys):
                        bed_a_memo_instr_resp.keys = _bed_a_memo_instr_resp_allKeys[-1].name  # just the last key pressed
                        bed_a_memo_instr_resp.rt = _bed_a_memo_instr_resp_allKeys[-1].rt
                        bed_a_memo_instr_resp.duration = _bed_a_memo_instr_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in bed_a_memotest_instrComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "bed_a_memotest_instr" ---
            for thisComponent in bed_a_memotest_instrComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "bed_a_memotest_instr" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "memo_fix_isi" ---
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from random_isi_code_memo
            # Random Zeit ziehen für Fixationskreuzpräsentation
            import random
            time=random.uniform(0.2,1)
            # keep track of which components have finished
            memo_fix_isiComponents = [memo_fix_pic]
            for thisComponent in memo_fix_isiComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "memo_fix_isi" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *memo_fix_pic* updates
                
                # if memo_fix_pic is starting this frame...
                if memo_fix_pic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memo_fix_pic.frameNStart = frameN  # exact frame index
                    memo_fix_pic.tStart = t  # local t and not account for scr refresh
                    memo_fix_pic.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memo_fix_pic, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memo_fix_pic.status = STARTED
                    memo_fix_pic.setAutoDraw(True)
                
                # if memo_fix_pic is active this frame...
                if memo_fix_pic.status == STARTED:
                    # update params
                    pass
                
                # if memo_fix_pic is stopping this frame...
                if memo_fix_pic.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > memo_fix_pic.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        memo_fix_pic.tStop = t  # not accounting for scr refresh
                        memo_fix_pic.tStopRefresh = tThisFlipGlobal  # on global time
                        memo_fix_pic.frameNStop = frameN  # exact frame index
                        # update status
                        memo_fix_pic.status = FINISHED
                        memo_fix_pic.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in memo_fix_isiComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "memo_fix_isi" ---
            for thisComponent in memo_fix_isiComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "memo_fix_isi" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "memotest_task" ---
            continueRoutine = True
            # update component parameters for each repeat
            memotest_task_stim.setImage(stimulus)
            memotest_task_slider.reset()
            memotest_task_slider_key_resp.keys = []
            memotest_task_slider_key_resp.rt = []
            _memotest_task_slider_key_resp_allKeys = []
            # keep track of which components have finished
            memotest_taskComponents = [memotest_task_stim, memotest_task_slider, memotest_task_slider_key_resp]
            for thisComponent in memotest_taskComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "memotest_task" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *memotest_task_stim* updates
                
                # if memotest_task_stim is starting this frame...
                if memotest_task_stim.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_stim.frameNStart = frameN  # exact frame index
                    memotest_task_stim.tStart = t  # local t and not account for scr refresh
                    memotest_task_stim.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_stim, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_stim.status = STARTED
                    memotest_task_stim.setAutoDraw(True)
                
                # if memotest_task_stim is active this frame...
                if memotest_task_stim.status == STARTED:
                    # update params
                    pass
                
                # *memotest_task_slider* updates
                
                # if memotest_task_slider is starting this frame...
                if memotest_task_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_slider.frameNStart = frameN  # exact frame index
                    memotest_task_slider.tStart = t  # local t and not account for scr refresh
                    memotest_task_slider.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_slider, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_slider.status = STARTED
                    memotest_task_slider.setAutoDraw(True)
                
                # if memotest_task_slider is active this frame...
                if memotest_task_slider.status == STARTED:
                    # update params
                    pass
                
                # *memotest_task_slider_key_resp* updates
                waitOnFlip = False
                
                # if memotest_task_slider_key_resp is starting this frame...
                if memotest_task_slider_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_slider_key_resp.frameNStart = frameN  # exact frame index
                    memotest_task_slider_key_resp.tStart = t  # local t and not account for scr refresh
                    memotest_task_slider_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_slider_key_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_slider_key_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(memotest_task_slider_key_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(memotest_task_slider_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if memotest_task_slider_key_resp.status == STARTED and not waitOnFlip:
                    theseKeys = memotest_task_slider_key_resp.getKeys(keyList=['d', 'f', 'j', 'k'], ignoreKeys=["escape"], waitRelease=False)
                    _memotest_task_slider_key_resp_allKeys.extend(theseKeys)
                    if len(_memotest_task_slider_key_resp_allKeys):
                        memotest_task_slider_key_resp.keys = _memotest_task_slider_key_resp_allKeys[0].name  # just the first key pressed
                        memotest_task_slider_key_resp.rt = _memotest_task_slider_key_resp_allKeys[0].rt
                        memotest_task_slider_key_resp.duration = _memotest_task_slider_key_resp_allKeys[0].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in memotest_taskComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "memotest_task" ---
            for thisComponent in memotest_taskComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if memotest_task_slider_key_resp.keys in ['', [], None]:  # No response was made
                memotest_task_slider_key_resp.keys = None
            bed_a_memotest.addData('memotest_task_slider_key_resp.keys',memotest_task_slider_key_resp.keys)
            if memotest_task_slider_key_resp.keys != None:  # we had a response
                bed_a_memotest.addData('memotest_task_slider_key_resp.rt', memotest_task_slider_key_resp.rt)
                bed_a_memotest.addData('memotest_task_slider_key_resp.duration', memotest_task_slider_key_resp.duration)
            # the Routine "memotest_task" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed bedrooms_1 repeats of 'bed_a_memotest'
        
        
        # set up handler to look after randomisation of conditions etc
        bed_b_categorization_trials = data.TrialHandler(nReps=bedrooms_2, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(conditions_cat_sleep_b),
            seed=None, name='bed_b_categorization_trials')
        thisExp.addLoop(bed_b_categorization_trials)  # add the loop to the experiment
        thisBed_b_categorization_trial = bed_b_categorization_trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisBed_b_categorization_trial.rgb)
        if thisBed_b_categorization_trial != None:
            for paramName in thisBed_b_categorization_trial:
                globals()[paramName] = thisBed_b_categorization_trial[paramName]
        
        for thisBed_b_categorization_trial in bed_b_categorization_trials:
            currentLoop = bed_b_categorization_trials
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisBed_b_categorization_trial.rgb)
            if thisBed_b_categorization_trial != None:
                for paramName in thisBed_b_categorization_trial:
                    globals()[paramName] = thisBed_b_categorization_trial[paramName]
            
            # --- Prepare to start Routine "bed_b" ---
            continueRoutine = True
            # update component parameters for each repeat
            # skip this Routine if its 'Skip if' condition is True
            continueRoutine = continueRoutine and not (bed_b_categorization_trials.thisN > 0)
            bed_b_resp.keys = []
            bed_b_resp.rt = []
            _bed_b_resp_allKeys = []
            bed_b_block_no.setText(block_total)
            # keep track of which components have finished
            bed_bComponents = [bed_b_text, bed_b_text_2, bed_b_resp, bed_b_block_no]
            for thisComponent in bed_bComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "bed_b" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *bed_b_text* updates
                
                # if bed_b_text is starting this frame...
                if bed_b_text.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    bed_b_text.frameNStart = frameN  # exact frame index
                    bed_b_text.tStart = t  # local t and not account for scr refresh
                    bed_b_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_b_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_b_text.status = STARTED
                    bed_b_text.setAutoDraw(True)
                
                # if bed_b_text is active this frame...
                if bed_b_text.status == STARTED:
                    # update params
                    pass
                
                # *bed_b_text_2* updates
                
                # if bed_b_text_2 is starting this frame...
                if bed_b_text_2.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    bed_b_text_2.frameNStart = frameN  # exact frame index
                    bed_b_text_2.tStart = t  # local t and not account for scr refresh
                    bed_b_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_b_text_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'bed_b_text_2.started')
                    # update status
                    bed_b_text_2.status = STARTED
                    bed_b_text_2.setAutoDraw(True)
                
                # if bed_b_text_2 is active this frame...
                if bed_b_text_2.status == STARTED:
                    # update params
                    pass
                
                # *bed_b_resp* updates
                waitOnFlip = False
                
                # if bed_b_resp is starting this frame...
                if bed_b_resp.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    bed_b_resp.frameNStart = frameN  # exact frame index
                    bed_b_resp.tStart = t  # local t and not account for scr refresh
                    bed_b_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_b_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_b_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(bed_b_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(bed_b_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if bed_b_resp.status == STARTED and not waitOnFlip:
                    theseKeys = bed_b_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _bed_b_resp_allKeys.extend(theseKeys)
                    if len(_bed_b_resp_allKeys):
                        bed_b_resp.keys = _bed_b_resp_allKeys[-1].name  # just the last key pressed
                        bed_b_resp.rt = _bed_b_resp_allKeys[-1].rt
                        bed_b_resp.duration = _bed_b_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # *bed_b_block_no* updates
                
                # if bed_b_block_no is starting this frame...
                if bed_b_block_no.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                    # keep track of start time/frame for later
                    bed_b_block_no.frameNStart = frameN  # exact frame index
                    bed_b_block_no.tStart = t  # local t and not account for scr refresh
                    bed_b_block_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_b_block_no, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'bed_b_block_no.started')
                    # update status
                    bed_b_block_no.status = STARTED
                    bed_b_block_no.setAutoDraw(True)
                
                # if bed_b_block_no is active this frame...
                if bed_b_block_no.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in bed_bComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "bed_b" ---
            for thisComponent in bed_bComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "bed_b" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "bed_random_isi" ---
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from bed_random_isi_code
            # Random Zeit ziehen für Fixationskreuzpräsentation
            import random
            time=random.uniform(0.9,1.9)
            # keep track of which components have finished
            bed_random_isiComponents = [bed_random_isi_fix, bed_random_isi_no, bed_random_isi_yes, bed_random_isi_question]
            for thisComponent in bed_random_isiComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "bed_random_isi" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *bed_random_isi_fix* updates
                
                # if bed_random_isi_fix is starting this frame...
                if bed_random_isi_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_random_isi_fix.frameNStart = frameN  # exact frame index
                    bed_random_isi_fix.tStart = t  # local t and not account for scr refresh
                    bed_random_isi_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_random_isi_fix, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_random_isi_fix.status = STARTED
                    bed_random_isi_fix.setAutoDraw(True)
                
                # if bed_random_isi_fix is active this frame...
                if bed_random_isi_fix.status == STARTED:
                    # update params
                    pass
                
                # if bed_random_isi_fix is stopping this frame...
                if bed_random_isi_fix.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > bed_random_isi_fix.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        bed_random_isi_fix.tStop = t  # not accounting for scr refresh
                        bed_random_isi_fix.tStopRefresh = tThisFlipGlobal  # on global time
                        bed_random_isi_fix.frameNStop = frameN  # exact frame index
                        # update status
                        bed_random_isi_fix.status = FINISHED
                        bed_random_isi_fix.setAutoDraw(False)
                
                # *bed_random_isi_no* updates
                
                # if bed_random_isi_no is starting this frame...
                if bed_random_isi_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_random_isi_no.frameNStart = frameN  # exact frame index
                    bed_random_isi_no.tStart = t  # local t and not account for scr refresh
                    bed_random_isi_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_random_isi_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_random_isi_no.status = STARTED
                    bed_random_isi_no.setAutoDraw(True)
                
                # if bed_random_isi_no is active this frame...
                if bed_random_isi_no.status == STARTED:
                    # update params
                    pass
                
                # if bed_random_isi_no is stopping this frame...
                if bed_random_isi_no.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > bed_random_isi_no.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        bed_random_isi_no.tStop = t  # not accounting for scr refresh
                        bed_random_isi_no.tStopRefresh = tThisFlipGlobal  # on global time
                        bed_random_isi_no.frameNStop = frameN  # exact frame index
                        # update status
                        bed_random_isi_no.status = FINISHED
                        bed_random_isi_no.setAutoDraw(False)
                
                # *bed_random_isi_yes* updates
                
                # if bed_random_isi_yes is starting this frame...
                if bed_random_isi_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_random_isi_yes.frameNStart = frameN  # exact frame index
                    bed_random_isi_yes.tStart = t  # local t and not account for scr refresh
                    bed_random_isi_yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_random_isi_yes, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_random_isi_yes.status = STARTED
                    bed_random_isi_yes.setAutoDraw(True)
                
                # if bed_random_isi_yes is active this frame...
                if bed_random_isi_yes.status == STARTED:
                    # update params
                    pass
                
                # if bed_random_isi_yes is stopping this frame...
                if bed_random_isi_yes.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > bed_random_isi_yes.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        bed_random_isi_yes.tStop = t  # not accounting for scr refresh
                        bed_random_isi_yes.tStopRefresh = tThisFlipGlobal  # on global time
                        bed_random_isi_yes.frameNStop = frameN  # exact frame index
                        # update status
                        bed_random_isi_yes.status = FINISHED
                        bed_random_isi_yes.setAutoDraw(False)
                
                # *bed_random_isi_question* updates
                
                # if bed_random_isi_question is starting this frame...
                if bed_random_isi_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_random_isi_question.frameNStart = frameN  # exact frame index
                    bed_random_isi_question.tStart = t  # local t and not account for scr refresh
                    bed_random_isi_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_random_isi_question, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_random_isi_question.status = STARTED
                    bed_random_isi_question.setAutoDraw(True)
                
                # if bed_random_isi_question is active this frame...
                if bed_random_isi_question.status == STARTED:
                    # update params
                    pass
                
                # if bed_random_isi_question is stopping this frame...
                if bed_random_isi_question.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > bed_random_isi_question.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        bed_random_isi_question.tStop = t  # not accounting for scr refresh
                        bed_random_isi_question.tStopRefresh = tThisFlipGlobal  # on global time
                        bed_random_isi_question.frameNStop = frameN  # exact frame index
                        # update status
                        bed_random_isi_question.status = FINISHED
                        bed_random_isi_question.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in bed_random_isiComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "bed_random_isi" ---
            for thisComponent in bed_random_isiComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "bed_random_isi" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "bed_picture" ---
            continueRoutine = True
            # update component parameters for each repeat
            bed_picture_image.setImage(stimulus)
            bed_picture_resp.keys = []
            bed_picture_resp.rt = []
            _bed_picture_resp_allKeys = []
            # keep track of which components have finished
            bed_pictureComponents = [bed_picture_fix, bed_picture_image, bed_picture_no, bed_picture_yes, bed_picture_resp, bed_picture_question]
            for thisComponent in bed_pictureComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "bed_picture" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *bed_picture_fix* updates
                
                # if bed_picture_fix is starting this frame...
                if bed_picture_fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_picture_fix.frameNStart = frameN  # exact frame index
                    bed_picture_fix.tStart = t  # local t and not account for scr refresh
                    bed_picture_fix.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_picture_fix, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_picture_fix.status = STARTED
                    bed_picture_fix.setAutoDraw(True)
                
                # if bed_picture_fix is active this frame...
                if bed_picture_fix.status == STARTED:
                    # update params
                    pass
                
                # *bed_picture_image* updates
                
                # if bed_picture_image is starting this frame...
                if bed_picture_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_picture_image.frameNStart = frameN  # exact frame index
                    bed_picture_image.tStart = t  # local t and not account for scr refresh
                    bed_picture_image.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_picture_image, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'bed_picture_image.started')
                    # update status
                    bed_picture_image.status = STARTED
                    bed_picture_image.setAutoDraw(True)
                
                # if bed_picture_image is active this frame...
                if bed_picture_image.status == STARTED:
                    # update params
                    pass
                
                # if bed_picture_image is stopping this frame...
                if bed_picture_image.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > bed_picture_image.tStartRefresh + 0.75-frameTolerance:
                        # keep track of stop time/frame for later
                        bed_picture_image.tStop = t  # not accounting for scr refresh
                        bed_picture_image.tStopRefresh = tThisFlipGlobal  # on global time
                        bed_picture_image.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'bed_picture_image.stopped')
                        # update status
                        bed_picture_image.status = FINISHED
                        bed_picture_image.setAutoDraw(False)
                
                # *bed_picture_no* updates
                
                # if bed_picture_no is starting this frame...
                if bed_picture_no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_picture_no.frameNStart = frameN  # exact frame index
                    bed_picture_no.tStart = t  # local t and not account for scr refresh
                    bed_picture_no.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_picture_no, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_picture_no.status = STARTED
                    bed_picture_no.setAutoDraw(True)
                
                # if bed_picture_no is active this frame...
                if bed_picture_no.status == STARTED:
                    # update params
                    pass
                
                # *bed_picture_yes* updates
                
                # if bed_picture_yes is starting this frame...
                if bed_picture_yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_picture_yes.frameNStart = frameN  # exact frame index
                    bed_picture_yes.tStart = t  # local t and not account for scr refresh
                    bed_picture_yes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_picture_yes, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_picture_yes.status = STARTED
                    bed_picture_yes.setAutoDraw(True)
                
                # if bed_picture_yes is active this frame...
                if bed_picture_yes.status == STARTED:
                    # update params
                    pass
                
                # *bed_picture_resp* updates
                waitOnFlip = False
                
                # if bed_picture_resp is starting this frame...
                if bed_picture_resp.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_picture_resp.frameNStart = frameN  # exact frame index
                    bed_picture_resp.tStart = t  # local t and not account for scr refresh
                    bed_picture_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_picture_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_picture_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(bed_picture_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(bed_picture_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if bed_picture_resp.status == STARTED and not waitOnFlip:
                    theseKeys = bed_picture_resp.getKeys(keyList=['f', 'j'], ignoreKeys=["escape"], waitRelease=False)
                    _bed_picture_resp_allKeys.extend(theseKeys)
                    if len(_bed_picture_resp_allKeys):
                        bed_picture_resp.keys = _bed_picture_resp_allKeys[-1].name  # just the last key pressed
                        bed_picture_resp.rt = _bed_picture_resp_allKeys[-1].rt
                        bed_picture_resp.duration = _bed_picture_resp_allKeys[-1].duration
                        # was this correct?
                        if (bed_picture_resp.keys == str(correct_answer)) or (bed_picture_resp.keys == correct_answer):
                            bed_picture_resp.corr = 1
                        else:
                            bed_picture_resp.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # *bed_picture_question* updates
                
                # if bed_picture_question is starting this frame...
                if bed_picture_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_picture_question.frameNStart = frameN  # exact frame index
                    bed_picture_question.tStart = t  # local t and not account for scr refresh
                    bed_picture_question.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_picture_question, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_picture_question.status = STARTED
                    bed_picture_question.setAutoDraw(True)
                
                # if bed_picture_question is active this frame...
                if bed_picture_question.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in bed_pictureComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "bed_picture" ---
            for thisComponent in bed_pictureComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if bed_picture_resp.keys in ['', [], None]:  # No response was made
                bed_picture_resp.keys = None
                # was no response the correct answer?!
                if str(correct_answer).lower() == 'none':
                   bed_picture_resp.corr = 1;  # correct non-response
                else:
                   bed_picture_resp.corr = 0;  # failed to respond (incorrectly)
            # store data for bed_b_categorization_trials (TrialHandler)
            bed_b_categorization_trials.addData('bed_picture_resp.keys',bed_picture_resp.keys)
            bed_b_categorization_trials.addData('bed_picture_resp.corr', bed_picture_resp.corr)
            if bed_picture_resp.keys != None:  # we had a response
                bed_b_categorization_trials.addData('bed_picture_resp.rt', bed_picture_resp.rt)
                bed_b_categorization_trials.addData('bed_picture_resp.duration', bed_picture_resp.duration)
            # the Routine "bed_picture" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed bedrooms_2 repeats of 'bed_b_categorization_trials'
        
        
        # set up handler to look after randomisation of conditions etc
        bed_b_memotest = data.TrialHandler(nReps=bedrooms_2, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(conditions_memo_sleep_b),
            seed=None, name='bed_b_memotest')
        thisExp.addLoop(bed_b_memotest)  # add the loop to the experiment
        thisBed_b_memotest = bed_b_memotest.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisBed_b_memotest.rgb)
        if thisBed_b_memotest != None:
            for paramName in thisBed_b_memotest:
                globals()[paramName] = thisBed_b_memotest[paramName]
        
        for thisBed_b_memotest in bed_b_memotest:
            currentLoop = bed_b_memotest
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisBed_b_memotest.rgb)
            if thisBed_b_memotest != None:
                for paramName in thisBed_b_memotest:
                    globals()[paramName] = thisBed_b_memotest[paramName]
            
            # --- Prepare to start Routine "bed_b_memotest_instr" ---
            continueRoutine = True
            # update component parameters for each repeat
            # skip this Routine if its 'Skip if' condition is True
            continueRoutine = continueRoutine and not (bed_b_memotest.thisN > 0)
            bed_b_memo_instr_resp.keys = []
            bed_b_memo_instr_resp.rt = []
            _bed_b_memo_instr_resp_allKeys = []
            # keep track of which components have finished
            bed_b_memotest_instrComponents = [bed_b_memo_instr_text, bed_b_memo_instr_resp]
            for thisComponent in bed_b_memotest_instrComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "bed_b_memotest_instr" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *bed_b_memo_instr_text* updates
                
                # if bed_b_memo_instr_text is starting this frame...
                if bed_b_memo_instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_b_memo_instr_text.frameNStart = frameN  # exact frame index
                    bed_b_memo_instr_text.tStart = t  # local t and not account for scr refresh
                    bed_b_memo_instr_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_b_memo_instr_text, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_b_memo_instr_text.status = STARTED
                    bed_b_memo_instr_text.setAutoDraw(True)
                
                # if bed_b_memo_instr_text is active this frame...
                if bed_b_memo_instr_text.status == STARTED:
                    # update params
                    pass
                
                # *bed_b_memo_instr_resp* updates
                waitOnFlip = False
                
                # if bed_b_memo_instr_resp is starting this frame...
                if bed_b_memo_instr_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bed_b_memo_instr_resp.frameNStart = frameN  # exact frame index
                    bed_b_memo_instr_resp.tStart = t  # local t and not account for scr refresh
                    bed_b_memo_instr_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bed_b_memo_instr_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    bed_b_memo_instr_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(bed_b_memo_instr_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(bed_b_memo_instr_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if bed_b_memo_instr_resp.status == STARTED and not waitOnFlip:
                    theseKeys = bed_b_memo_instr_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _bed_b_memo_instr_resp_allKeys.extend(theseKeys)
                    if len(_bed_b_memo_instr_resp_allKeys):
                        bed_b_memo_instr_resp.keys = _bed_b_memo_instr_resp_allKeys[-1].name  # just the last key pressed
                        bed_b_memo_instr_resp.rt = _bed_b_memo_instr_resp_allKeys[-1].rt
                        bed_b_memo_instr_resp.duration = _bed_b_memo_instr_resp_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in bed_b_memotest_instrComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "bed_b_memotest_instr" ---
            for thisComponent in bed_b_memotest_instrComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "bed_b_memotest_instr" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "memo_fix_isi" ---
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from random_isi_code_memo
            # Random Zeit ziehen für Fixationskreuzpräsentation
            import random
            time=random.uniform(0.2,1)
            # keep track of which components have finished
            memo_fix_isiComponents = [memo_fix_pic]
            for thisComponent in memo_fix_isiComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "memo_fix_isi" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *memo_fix_pic* updates
                
                # if memo_fix_pic is starting this frame...
                if memo_fix_pic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memo_fix_pic.frameNStart = frameN  # exact frame index
                    memo_fix_pic.tStart = t  # local t and not account for scr refresh
                    memo_fix_pic.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memo_fix_pic, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memo_fix_pic.status = STARTED
                    memo_fix_pic.setAutoDraw(True)
                
                # if memo_fix_pic is active this frame...
                if memo_fix_pic.status == STARTED:
                    # update params
                    pass
                
                # if memo_fix_pic is stopping this frame...
                if memo_fix_pic.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > memo_fix_pic.tStartRefresh + time-frameTolerance:
                        # keep track of stop time/frame for later
                        memo_fix_pic.tStop = t  # not accounting for scr refresh
                        memo_fix_pic.tStopRefresh = tThisFlipGlobal  # on global time
                        memo_fix_pic.frameNStop = frameN  # exact frame index
                        # update status
                        memo_fix_pic.status = FINISHED
                        memo_fix_pic.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in memo_fix_isiComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "memo_fix_isi" ---
            for thisComponent in memo_fix_isiComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "memo_fix_isi" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "memotest_task" ---
            continueRoutine = True
            # update component parameters for each repeat
            memotest_task_stim.setImage(stimulus)
            memotest_task_slider.reset()
            memotest_task_slider_key_resp.keys = []
            memotest_task_slider_key_resp.rt = []
            _memotest_task_slider_key_resp_allKeys = []
            # keep track of which components have finished
            memotest_taskComponents = [memotest_task_stim, memotest_task_slider, memotest_task_slider_key_resp]
            for thisComponent in memotest_taskComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "memotest_task" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *memotest_task_stim* updates
                
                # if memotest_task_stim is starting this frame...
                if memotest_task_stim.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_stim.frameNStart = frameN  # exact frame index
                    memotest_task_stim.tStart = t  # local t and not account for scr refresh
                    memotest_task_stim.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_stim, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_stim.status = STARTED
                    memotest_task_stim.setAutoDraw(True)
                
                # if memotest_task_stim is active this frame...
                if memotest_task_stim.status == STARTED:
                    # update params
                    pass
                
                # *memotest_task_slider* updates
                
                # if memotest_task_slider is starting this frame...
                if memotest_task_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_slider.frameNStart = frameN  # exact frame index
                    memotest_task_slider.tStart = t  # local t and not account for scr refresh
                    memotest_task_slider.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_slider, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_slider.status = STARTED
                    memotest_task_slider.setAutoDraw(True)
                
                # if memotest_task_slider is active this frame...
                if memotest_task_slider.status == STARTED:
                    # update params
                    pass
                
                # *memotest_task_slider_key_resp* updates
                waitOnFlip = False
                
                # if memotest_task_slider_key_resp is starting this frame...
                if memotest_task_slider_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    memotest_task_slider_key_resp.frameNStart = frameN  # exact frame index
                    memotest_task_slider_key_resp.tStart = t  # local t and not account for scr refresh
                    memotest_task_slider_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(memotest_task_slider_key_resp, 'tStartRefresh')  # time at next scr refresh
                    # update status
                    memotest_task_slider_key_resp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(memotest_task_slider_key_resp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(memotest_task_slider_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if memotest_task_slider_key_resp.status == STARTED and not waitOnFlip:
                    theseKeys = memotest_task_slider_key_resp.getKeys(keyList=['d', 'f', 'j', 'k'], ignoreKeys=["escape"], waitRelease=False)
                    _memotest_task_slider_key_resp_allKeys.extend(theseKeys)
                    if len(_memotest_task_slider_key_resp_allKeys):
                        memotest_task_slider_key_resp.keys = _memotest_task_slider_key_resp_allKeys[0].name  # just the first key pressed
                        memotest_task_slider_key_resp.rt = _memotest_task_slider_key_resp_allKeys[0].rt
                        memotest_task_slider_key_resp.duration = _memotest_task_slider_key_resp_allKeys[0].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in memotest_taskComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "memotest_task" ---
            for thisComponent in memotest_taskComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if memotest_task_slider_key_resp.keys in ['', [], None]:  # No response was made
                memotest_task_slider_key_resp.keys = None
            bed_b_memotest.addData('memotest_task_slider_key_resp.keys',memotest_task_slider_key_resp.keys)
            if memotest_task_slider_key_resp.keys != None:  # we had a response
                bed_b_memotest.addData('memotest_task_slider_key_resp.rt', memotest_task_slider_key_resp.rt)
                bed_b_memotest.addData('memotest_task_slider_key_resp.duration', memotest_task_slider_key_resp.duration)
            # the Routine "memotest_task" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed bedrooms_2 repeats of 'bed_b_memotest'
        
        
        # --- Prepare to start Routine "middle_break" ---
        continueRoutine = True
        # update component parameters for each repeat
        break_resp.keys = []
        break_resp.rt = []
        _break_resp_allKeys = []
        # keep track of which components have finished
        middle_breakComponents = [break_text, break_resp]
        for thisComponent in middle_breakComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "middle_break" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *break_text* updates
            
            # if break_text is starting this frame...
            if break_text.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                break_text.frameNStart = frameN  # exact frame index
                break_text.tStart = t  # local t and not account for scr refresh
                break_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(break_text, 'tStartRefresh')  # time at next scr refresh
                # update status
                break_text.status = STARTED
                break_text.setAutoDraw(True)
            
            # if break_text is active this frame...
            if break_text.status == STARTED:
                # update params
                pass
            
            # *break_resp* updates
            waitOnFlip = False
            
            # if break_resp is starting this frame...
            if break_resp.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
                # keep track of start time/frame for later
                break_resp.frameNStart = frameN  # exact frame index
                break_resp.tStart = t  # local t and not account for scr refresh
                break_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(break_resp, 'tStartRefresh')  # time at next scr refresh
                # update status
                break_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(break_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(break_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if break_resp.status == STARTED and not waitOnFlip:
                theseKeys = break_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _break_resp_allKeys.extend(theseKeys)
                if len(_break_resp_allKeys):
                    break_resp.keys = _break_resp_allKeys[-1].name  # just the last key pressed
                    break_resp.rt = _break_resp_allKeys[-1].rt
                    break_resp.duration = _break_resp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in middle_breakComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "middle_break" ---
        for thisComponent in middle_breakComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "middle_break" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 0.0 repeats of 'categorization_trials'
    
    
    # --- Prepare to start Routine "end" ---
    continueRoutine = True
    # update component parameters for each repeat
    end_resp.keys = []
    end_resp.rt = []
    _end_resp_allKeys = []
    # keep track of which components have finished
    endComponents = [end_text, end_resp]
    for thisComponent in endComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "end" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *end_text* updates
        
        # if end_text is starting this frame...
        if end_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            end_text.frameNStart = frameN  # exact frame index
            end_text.tStart = t  # local t and not account for scr refresh
            end_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_text, 'tStartRefresh')  # time at next scr refresh
            # update status
            end_text.status = STARTED
            end_text.setAutoDraw(True)
        
        # if end_text is active this frame...
        if end_text.status == STARTED:
            # update params
            pass
        
        # *end_resp* updates
        waitOnFlip = False
        
        # if end_resp is starting this frame...
        if end_resp.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            end_resp.frameNStart = frameN  # exact frame index
            end_resp.tStart = t  # local t and not account for scr refresh
            end_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            end_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(end_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(end_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if end_resp.status == STARTED and not waitOnFlip:
            theseKeys = end_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _end_resp_allKeys.extend(theseKeys)
            if len(_end_resp_allKeys):
                end_resp.keys = _end_resp_allKeys[-1].name  # just the last key pressed
                end_resp.rt = _end_resp_allKeys[-1].rt
                end_resp.duration = _end_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in endComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "end" ---
    for thisComponent in endComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.nextEntry()
    # the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # shut down eyetracker, if there is one
    if deviceManager.getDevice('eyetracker') is not None:
        deviceManager.removeDevice('eyetracker')
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    # shut down eyetracker, if there is one
    if deviceManager.getDevice('eyetracker') is not None:
        deviceManager.removeDevice('eyetracker')
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
