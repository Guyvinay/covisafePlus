package com.covisafe.modal;

public enum Slot {

	SLOT1,
    SLOT2,
    SLOT3,
    SLOT4,
    SLOT5,
    SLOT6,
    SLOT7,
    SLOT8,
    SLOT9;
    
	private String time;

	private Slot() {
		
	}
	
	private Slot(String time) {
		this.time = time;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}
	 
	 
	
}
