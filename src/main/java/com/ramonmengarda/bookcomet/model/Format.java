package com.ramonmengarda.bookcomet.model;

public enum Format {
    PDF("PDF"),
    EPUB("ePub"),
    MOBI("mobi"),
    OTHER("Other");

    private String formatName;

    Format(String formatName){
        this.formatName = formatName;
    }

    public String formatName() {
        return formatName;
    }
}
