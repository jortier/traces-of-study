package ch03.se09;

public class Desktop extends Computer {

  @Override
  public void display() {
    System.out.println("Desktop display");
  }

  @Override
  public void typing() {
    System.out.println("Desktop typing");
  }

  @Override
  public void turnOff() {
    System.out.println("Desktop turn off");
  }

  @Override
  public void turnOn() {
    System.out.println("Desktop turn on");
  }

}
